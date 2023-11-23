import * as peace from './library/peace_library.js';

// читаем и применяем параметры игрового режима
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// делаем так, чтобы можно было сломать любой блок
BreackGraph.BreackAll = true;
// выводим количество квадов на карте
Ui.GetContext().QuadsCount.Value = true;

// разрешаем все что можно для строительства
peace.set_peace_build_settings();

// задаем название режима
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// создаем команды
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("Red", "Teams/Red", { r: 1 });
	Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("Blue", "Teams/Blue", { b: 1 });
	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
	if(GameMode.Parameters.GetBool("BlueHasNothing")){
		var inventory = Inventory.GetContext();
		Teams.Get("Blue").Inventory.Main.Value = false;
		Teams.Get("Blue").Inventory.Secondary.Value = false;
		Teams.Get("Blue").Inventory.Melee.Value = false;
		Teams.Get("Blue").Inventory.Explosive.Value = false;
		Teams.Get("Blue").Inventory.Build.Value = false;
	}
}

// по запросу на вход в команду - кидаем игрока в команду
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// если игрок сменил команду или выбрал ее, то происходит спавн игрока
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// выводим подсказку
Ui.getContext().Hint.Value = "Hint/BuildBase";

// настройка инвентаря
peace.set_peace_inventory();

// делаем возможность строительства всеми блоками
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// убираем таймер респавна
Spawns.GetContext().RespawnTime.Value = 0;