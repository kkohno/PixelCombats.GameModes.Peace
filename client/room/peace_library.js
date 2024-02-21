import { Inventory, Build, BuildBlocksSet, BreackGraph, GameMode, Properties, Ui, Spawns, Damage } from 'pixel_combats/room';
import * as teams from './default_teams.js';

// разрешает все что можно для строительства
function set_inventory() {
    const context = Inventory.GetContext();
    context.Main.Value = false;
    context.Secondary.Value = false;
    context.Melee.Value = true;
    context.Explosive.Value = false;
    context.Build.Value = true;
    context.BuildInfinity.Value = true;
}

function set_build_settings() {
    const context = Build.GetContext();
    // прочие опции
    context.Pipette.Value = true;
    context.BalkLenChange.Value = true;
    context.SetSkyEnable.Value = true;
    context.GenMapEnable.Value = true;
    context.ChangeCameraPointsEnable.Value = true;
    context.QuadChangeEnable.Value = true;
    context.BuildModeEnable.Value = true;
    context.CollapseChangeEnable.Value = true;
    context.RenameMapEnable.Value = true;
    context.ChangeMapAuthorsEnable.Value = true;
    context.LoadMapEnable.Value = true;
    context.ChangeSpawnsEnable.Value = true;
    context.BlocksSet.Value = BuildBlocksSet.AllClear; // делаем возможность строительства всеми блоками
}

// задает в контекст инвентаря пустой инвентарь
function set_empty_inventory(inventory) {
    inventory.Main.Value = false;
    inventory.Secondary.Value = false;
    inventory.Melee.Value = false;
    inventory.Explosive.Value = false;
    inventory.Build.Value = false;
}

// задает опции режима мир, выбранные при создании комнаты
export function apply_room_options() {
    const gameModeParameters = GameMode.Parameters;

    // опции строительства
    const buildContext = Build.GetContext();
    buildContext.FloodFill.Value = gameModeParameters.GetBool("FloodFill");
    buildContext.FillQuad.Value = gameModeParameters.GetBool("FillQuad");
    buildContext.RemoveQuad.Value = gameModeParameters.GetBool("RemoveQuad");
    buildContext.FlyEnable.Value = gameModeParameters.GetBool("Fly");

    // прочие опции
    Damage.GetContext().DamageOut.Value = gameModeParameters.GetBool("Damage");
    BreackGraph.OnlyPlayerBlocksDmg = gameModeParameters.GetBool("PartialDesruction");
    BreackGraph.WeakBlocks = gameModeParameters.GetBool("LoosenBlocks");
}

// задает настройки режима мир
export function configure() {
    Properties.GetContext().GameModeName.Value = "GameModes/Peace";// задаем название режима
    Ui.GetContext().Hint.Value = "Hint/BuildBase";// выводим подсказку
    Ui.GetContext().QuadsCount.Value = true;// выводим количество квадов на карте
    BreackGraph.BreackAll = true; // делаем так, чтобы можно было сломать любой блок
    Spawns.GetContext().RespawnTime.Value = 0; // убираем таймер респавна
    set_build_settings();
    set_inventory();
    apply_room_options();
}

export function create_teams() {
    // создаем команды
    red = GameMode.Parameters.GetBool("RedTeam");
    blue = GameMode.Parameters.GetBool("BlueTeam");
    if (red || !red && !blue) {
        teams.create_team_red();
    }
    if (blue || !red && !blue) {
        const blueTeam = teams.create_team_blue();
        if (GameMode.Parameters.GetBool("BlueHasNothing")) {
            set_empty_inventory(blueTeam.Inventory);
        }
    }

    // по запросу на вход в команду - кидаем игрока в команду
    Teams.OnRequestJoinTeam.Add(function (player, team) { team.Add(player); });
    // если игрок сменил команду или выбрал ее, то происходит спавн игрока
    Teams.OnPlayerChangeTeam.Add(function (player) { player.Spawns.Spawn() });
}