/*import * as room from 'pixel_combats/room';
import * as teams from './default_teams.js';

// разрешает все что можно для строительства
function set_inventory() {
    const context = room.Inventory.GetContext();
    context.Main.Value = false;
    context.Secondary.Value = false;
    context.Melee.Value = false;
    context.Explosive.Value = false;
    context.Build.Value = false;
}

function set_build_settings() {
    const context = room.Build.GetContext();
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
    context.BlocksSet.Value = room.BuildBlocksSet.AllClear; // делаем возможность строительства всеми блоками
}

// задает опции режима мир, выбранные при создании комнаты
export function apply_room_options() {
    const gameModeParameters = room.GameMode.Parameters;

    // опции строительства
    const buildContext = room.Build.GetContext();
    buildContext.FloodFill.Value = gameModeParameters.GetBool("FloodFill");
    buildContext.FillQuad.Value = gameModeParameters.GetBool("FillQuad");
    buildContext.RemoveQuad.Value = gameModeParameters.GetBool("RemoveQuad");
    buildContext.FlyEnable.Value = gameModeParameters.GetBool("Fly");

    // прочие опции
    room.Damage.GetContext().DamageOut.Value = gameModeParameters.GetBool("Damage");
    room.BreackGraph.OnlyPlayerBlocksDmg = gameModeParameters.GetBool("PartialDesruction");
    room.BreackGraph.WeakBlocks = gameModeParameters.GetBool("LoosenBlocks");
}

// задает настройки режима мир
export function configure() {
    room.Properties.GetContext().GameModeName.Value = "GameModes/Peace";// задаем название режима
    room.Ui.GetContext().Hint.Value = "Hint/BuildBase";// выводим подсказку
    room.Ui.GetContext().QuadsCount.Value = true;// выводим количество квадов на карте
    room.BreackGraph.BreackAll = true; // делаем так, чтобы можно было сломать любой блок
    room.Spawns.GetContext().RespawnTime.Value = 0; // убираем таймер респавна
    set_build_settings();
    set_inventory();
    apply_room_options();
}

export function create_teams() {
    const roomParameters = room.GameMode.Parameters;
    const hasRedTeam = roomParameters.GetBool("RedTeam");
    const hasBlueTeam = roomParameters.GetBool("BlueTeam");
    const blueHasNothing = roomParameters.GetBool("BlueHasNothing");

    // создание команд на основе параметров
    if (hasRedTeam || (!hasRedTeam && !hasBlueTeam)) {
        teams.create_team_red();
    }
    if (hasBlueTeam || (!hasRedTeam && !hasBlueTeam)) {
        teams.create_team_blue();
    }

    // настройка инвентаря команд при их добавлении
    room.Teams.OnAddTeam.Add(function (team) {
        const blue = team.Id === teams.BLUE_TEAM_NAME;
        team.Inventory.Melee.Value = blue ? !blueHasNothing : true;
        team.Inventory.Build.Value = blue ? !blueHasNothing : true;
        team.Inventory.BuildInfinity.Value = blue ? !blueHasNothing : true;
    });

    // по запросу на вход в команду - кидаем игрока в команду
    room.Teams.OnRequestJoinTeam.Add(function (player, team) { team.Add(player); });
    // если игрок сменил команду или выбрал ее, то происходит спавн игрока
    room.Teams.OnPlayerChangeTeam.Add(function (player) { player.Spawns.Spawn(); });
}
*/

import * as room from 'pixel_combats/room';
import * as teams from './default_teams.js';

function set_inventory() {
    const context = room.Inventory.GetContext();
    context.Main.Value = false;
    context.Secondary.Value = false;
    context.Melee.Value = false;
    context.Explosive.Value = false;
    context.Build.Value = false;
}

function set_build_settings() {
  const context = room.Build.GetContext();
  Object.assign(context, {
    Pipette: { Value: true },
    BalkLenChange: { Value: true },
    SetSkyEnable: { Value: true },
    GenMapEnable: { Value: true },
    ChangeCameraPointsEnable: { Value: true },
    QuadChangeEnable: { Value: true },
    BuildModeEnable: { Value: true },
    CollapseChangeEnable: { Value: true },
    RenameMapEnable: { Value: true },
    ChangeMapAuthorsEnable: { Value: true },
    LoadMapEnable: { Value: true },
    ChangeSpawnsEnable: { Value: true },
    BlocksSet: { Value: room.BuildBlocksSet.AllClear },
  });
}

export function apply_room_options() {
    const params = room.GameMode.Parameters;
    const buildContext = room.Build.GetContext();
    Object.assign(buildContext, {
        FloodFill: { Value: params.GetBool("FloodFill") },
        FillQuad: { Value: params.GetBool("FillQuad") },
        RemoveQuad: { Value: params.GetBool("RemoveQuad") },
        FlyEnable: { Value: params.GetBool("Fly") }
    });

    const damageContext = room.Damage.GetContext();
    damageContext.DamageOut.Value = params.GetBool("Damage");
    room.BreackGraph.OnlyPlayerBlocksDmg = params.GetBool("PartialDesruction");
    room.BreackGraph.WeakBlocks = params.GetBool("LoosenBlocks");
}


export function configure() {
    Object.assign(room.Properties.GetContext(), { GameModeName: { Value: "GameModes/Peace" } });
    Object.assign(room.Ui.GetContext(), { Hint: { Value: "Hint/BuildBase" }, QuadsCount: { Value: true } });

    room.BreackGraph.BreackAll = true;
    room.Spawns.GetContext().RespawnTime.Value = 0;
    set_build_settings();
    set_inventory();
    apply_room_options();
}

export function create_teams() {
    const params = room.GameMode.Parameters;
    const hasRedTeam = params.GetBool("RedTeam");
    const hasBlueTeam = params.GetBool("BlueTeam");
    const blueHasNothing = params.GetBool("BlueHasNothing");

    if (hasRedTeam || (!hasRedTeam && !hasBlueTeam)) teams.create_team_red();
    if (hasBlueTeam || (!hasRedTeam && !hasBlueTeam)) teams.create_team_blue();

    room.Teams.OnAddTeam.Add(team => {
        const isBlue = team.Id === teams.BLUE_TEAM_NAME;
        const hasItems = !blueHasNothing;
        team.Inventory.Melee.Value = isBlue ? hasItems : true;
        team.Inventory.Build.Value = isBlue ? hasItems : true;
        team.Inventory.BuildInfinity.Value = isBlue ? hasItems : true;
    });

    room.Teams.OnRequestJoinTeam.Add((player, team) => team.Add(player));
    room.Teams.OnPlayerChangeTeam.Add(player => player.Spawns.Spawn());
};
