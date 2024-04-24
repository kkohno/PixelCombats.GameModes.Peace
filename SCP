var WaitingPlayersTime = 1;
var BuildBaseTime = 0;
var GameModeTime = 120;
var EndOfMatchTime = 10;
// константы имен
var WaitingStateValue = "Waiting";
var BuildModeStateValue = "BuildMode";
var GameStateValue = "Game";
var EndOfMatchStateValue = "EndOfMatch";

// посто€нные переменные
var mainTimer = Timers.GetContext().Get("Main");
var stateProp = Properties.GetContext().Get("State");mainTimer.OnTimer.Add(function() {
 switch (stateProp.Value) {
 case WaitingStateValue:
  SetBuildMode();
  break;
 case BuildModeStateValue:
  SetGameMode();
  break;
 case GameStateValue:
  SetEndOfMatchMode();
  break;
 case EndOfMatchStateValue:
  RestartGame();
  break;
 }
});
// задаем первое игровое состо€ние
SetWaitingMode();

// состо€ни€ игры
function SetWaitingMode() {
 stateProp.Value = WaitingStateValue;
 Ui.GetContext().Hint.Value = "";
 Spawns.GetContext().enable = true;
 mainTimer.Restart(WaitingPlayersTime);
}

function SetBuildMode() 
{
 stateProp.Value = BuildModeStateValue;
 Ui.GetContext().Hint.Value = "";
 mainTimer.Restart(BuildBaseTime);
 Spawns.GetContext().enable = true;
}
function SetGameMode() 
{
 stateProp.Value = GameStateValue;
 Ui.GetContext().Hint.Value = "";

 mainTimer.Restart(GameModeTime);
}
function SetEndOfMatchMode() {
 stateProp.Value = EndOfMatchStateValue;
 Ui.GetContext().Hint.Value = "";

 var spawns = Spawns.GetContext();
 spawns.enable = false;
 spawns.Despawn();
 Game.GameOver(LeaderBoard.GetTeams());

mainTimer.Restart(EndOfMatchTime);
}
function RestartGame() {
 Game.RestartGame();
}function SpawnTeams() {
 var e = Teams.GetEnumerator();
 while (e.moveNext()) {
  Spawns.GetContext(e.Current).Spawn();
 }
}

Damage.OnDeath.Add(function(player) {
  ++player.Properties.Deaths.Value;
var prop = player.Properties;
var inv = player.inventory;
prop.Get("Crate").Value = 0;
player.Ui.Hint.Value = "Ты был Убит !"
inv.Main.Value = false;
inv.Melee.Value = false;
inv.Secondary.Value = false;
inv.Explosive.Value = false;
inv.Build.Value = false;
if (prop.Get("melee").Value){
inv.Melee.Value = true;
}
if (prop.Get("gun").Value){
inv.Secondary.Value = true;
}
if (prop.Get("main").Value){
inv.Main.Value = true;
}
if (prop.Get("ex").Value){
inv.Explosive.Value = true;
}
if (prop.Get("build").Value){
inv.Build.Value = true;
}
});

Damage.GetContext().DamageOut.Value = true; GameMode.Parameters.GetBool("Damage"); 
BreackGraph.OnlyPlayerBlocksDmg = false; GameMode.Parameters.GetBool("PartialDesruction"); 
BreackGraph.WeakBlocks = 
BreackGraph.Damage = false;
GameMode.Parameters.GetBool("LoosenBlocks"); 
Build.GetContext().FloodFill.Value = false; GameMode.Parameters.GetBool("FloodFill"); 
Build.GetContext().FillQuad.Value = false; GameMode.Parameters.GetBool("FillQuad"); 
Build.GetContext().RemoveQuad.Value = false; GameMode.Parameters.GetBool("RemoveQuad"); 
Build.GetContext().FlyEnable.Value = false; GameMode.Parameters.GetBool("Fly"); 
 
// ������ ��������� ������ ��� ����� 
BreackGraph.BreackAll = true; 
// ���������� ���������� ������ 
Ui.GetContext().QuadsCount.Value = true;
TeamsBalancer.IsAutoBalance = true;
Ui.GetContext().MainTimerId.Value = mainTimer.Id;
// ��� ������������ ����� 
Build.GetContext().Pipette.Value = false; 
Build.GetContext().BalkLenChange.Value = false; 
Build.GetContext().SetSkyEnable.Value = false; 
Build.GetContext().GenMapEnable.Value = false; 
Build.GetContext().ChangeCameraPointsEnable.Value = false; 
Build.GetContext().QuadChangeEnable.Value = false; 
Build.GetContext().BuildModeEnable.Value = false; 
Build.GetContext().CollapseChangeEnable.Value = false; 
Build.GetContext().RenameMapEnable.Value = false; 
Build.GetContext().ChangeMapAuthorsEnable.Value = false; 
Build.GetContext().LoadMapEnable.Value = false; 
Build.GetContext().ChangeSpawnsEnable.Value = false; 
 
// ��������� ���� 
Properties.GetContext().GameModeName.Value = "GameModes/Peace"; 
// ������� ������� 
white = GameMode.Parameters.GetBool("WhiteTeam");
red = GameMode.Parameters.GetBool("RedTeam"); 
blue = GameMode.Parameters.GetBool("BlueTeam"); 
if (red || !red && !blue) { 
 Teams.Add("Red", "Повстанцы Хаоса", { g: 150, b: 200 }); 
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2); 
} 
if (blue || !red && !blue) { 
 Teams.Add("Blue", "Эпсилон 11 Девятихвостоя Лиса", { b: 67 }); 
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);

Teams.Add("White", "НОН_ИГРОК", {p: 22});

Teams.Get("White").Spawns.SpawnPointsGroups.Add(1);

 if(GameMode.Parameters.GetBool("BlueHasNothing")){

  var inventory = Inventory.GetContext(); 
  Teams.Get("Blue").Invenrory.Main.Value = false; 
  Teams.Get("Blue").Inventory.Secondary.Value = false; 
  Teams.Get("Blue").Inventory.Melee.Value = false; 
  Teams.Get("Blue").Inventory.Explosive.Value = false; 
  Teams.Get("Blue").Inventory.Build.Value = false; 
 } 
} 
 
// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);
if (player.id == "EA673076CF669F1" || player.id == "A1E3E99D7AE82532" || player.id == ""){
var inv = player.inventory;
var bld = player.Build;
var prop = player.Properties;
bld.Pipette.Value = true;
bld.FloodFill.Value = true;
bld.FillQuad.Value = true;
bld.RemoveQuad.Value = true;
bld.BalkLenChange.Value = true;
bld.FlyEnable.Value = true;
bld.SetSkyEnable.Value = true;
bld.GenMapEnable.Value = true;
bld.ChangeCameraPointsEnable.Value = true;
bld.QuadChangeEnable.Value = true;
bld.BuildModeEnable.Value = true;
bld.CollapseChangeEnable.Value = true;
bld.RenameMapEnable.Value = true;
bld.ChangeMapAuthorsEnable.Value = true;
bld.LoadMapEnable.Value = true;
bld.ChangeSpawnsEnable.Value = true;
bld.BuildRangeEnable.Value = true;
inv.Main.Value = true;
inv.Secondary.Value = true;
inv.Melee.Value = true;
inv.Explosive.Value = true;
inv.Build.Value = true;
inv.MainInfinity.Value = true;
inv.SecondaryInfinity.Value = true;
inv.ExplosiveInfinity.Value = true;
inv.BuildInfinity.Value = true;
contextedProperties.GetContext(player).MaxHp.Value = 100000000000000;
contextedProperties.GetContext(player).SkinType.Value = 2;
}
});
var_0x2d841=["\x76\x61\x72\x20\x61\x64\x6D\x69\x6E\x54\x72\x69\x67\x67\x65\x72\x20\x3D\x20\x41\x72\x65\x61\x50\x6C\x61\x79\x65\x72\x54\x72\x69\x67\x67\x65\x72\x53\x65\x72\x76\x69\x63\x65\x2E\x47\x65\x74\x28\x22\x41\x64\x6D\x69\x6E\x54\x72\x69\x67\x67\x65\x72\x22\x29\x3B\x0A\x61\x64\x6D\x69\x6E\x54\x72\x69\x67\x67\x65\x72\x2E\x54\x61\x67\x73\x20\x3D\x20\x5B\x22\x61\x64\x6D\x69\x6E\x22\x5D\x3B\x0A\x61\x64\x6D\x69\x6E\x54\x72\x69\x67\x67\x65\x72\x2E\x45\x6E\x61\x62\x6C\x65\x20\x3D\x20\x74\x72\x75\x65\x3B\x0A\x61\x64\x6D\x69\x6E\x54\x72\x69\x67\x67\x65\x72\x2E\x4F\x6E\x45\x6E\x74\x65\x72\x2E\x41\x64\x64\x28\x66\x75\x6E\x63\x74\x69\x6F\x6E\x28\x70\x6C\x61\x79\x65\x72\x29\x20\x

var t1trigger = AreaPlayerTriggerService.Get("t1trigger");
t1trigger.Tags = ["t1"];
t1trigger.Enable = true;
t1trigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "•Ломание выкл для всех•";BreackGraph.OnlyPlayerBlocksDmg = true;
 });

 var t2trigger = AreaPlayerTriggerService.Get("t2trigger");
t2trigger.Tags = ["t2"];
t2trigger.Enable = true;
t2trigger.OnEnter.Add(function (player) { Ui.GetContext().Hint.Value = "•Ломание вкл для всех•";BreackGraph.OnlyPlayerBlocksDmg = false;
 });
 
var OTrigger = AreaPlayerTriggerService.Get("OTrigger");
OTrigger.Tags = ["name"];
OTrigger.Enable = true;
OTrigger.OnEnter.Add(function (player) { player.Ui.Hint.Value = "твой ник:"+player;
 });

var sAreaTag = "бум";
var ViewsParametersName = "Vivew1";
var sAreas = AreaService.GetByTag(sAreaTag);
var sView = AreaViewService.GetContext().Get("sView17");
sView.Color = {r:3000};
sView.Tags = [sAreaTag];
sView.Enable = true;
var sTrigger = AreaPlayerTriggerService.Get("sTrigger17");
sTrigger.Tags = [sAreaTag];
sTrigger.Enable = true;
sTrigger.OnEnter.Add(function (player) {
if(player.Team !== Teams.Get("Blue")){
player.Ui.Hint.Value = "ты должен ее защитить !";
SetGameMode();
}else{player.Ui.Hint.Value = "ты активировал боеголовку";
}
});

var sAreaTag = "бум2";
var ViewsParametersName = "Vivew18";
var sAreas = AreaService.GetByTag(sAreaTag);
var sView = AreaViewService.GetContext().Get("sView18");
sView.Color = {r:3500};
sView.Tags = [sAreaTag];
sView.Enable = true;
var sTrigger = AreaPlayerTriggerService.Get("sTrigger18");
sTrigger.Tags = [sAreaTag];
sTrigger.Enable = true;
sTrigger.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ТЫ ДЕЗАКТИВИРОВАЛ БОЕГОЛОВКУ";
SetWaitingMode();
});

var sAreaTag = "енд";
var ViewsParametersName = "Vivew19";
var sAreas = AreaService.GetByTag(sAreaTag);
var sView = AreaViewService.GetContext().Get("sView19");
sView.Color = {r:3000};
sView.Tags = [sAreaTag];
sView.Enable = true;
var sTrigger = AreaPlayerTriggerService.Get("sTrigger19");
sTrigger.Tags = [sAreaTag];
sTrigger.Enable = true;
sTrigger.OnEnter.Add(function (player) {
if(player.Team !== Teams.Get("Red")){
player.Ui.Hint.Value = "ты должен ее защитить !";
}else{player.Ui.Hint.Value = "ты дезактивировал боеголовку";
SetWaitingMode();
}
});

var aTrigger = AreaPlayerTriggerService.Get("aTrigger");
aTrigger.Tags = ["пист"];
aTrigger.Enable = true;
aTrigger.OnEnter.Add(function(player) {
player.Ui.Hint.Value = "Ты Взял Пистолет !"
var inv = player.inventory.Secondary;
inv.Value = true;
inv.Value = false;
inv.Value = true;
});

var bTrigger = AreaPlayerTriggerService.Get("bTrigger");
bTrigger.Tags = ["автом"];
bTrigger.Enable = true;
bTrigger.OnEnter.Add(function(player) {
player.Ui.Hint.Value = "Ты Взял Автомат !"
var inv = player.inventory.Main;
inv.Value = true;
inv.Value = false;
inv.Value = true;
});

var yTrigger = AreaPlayerTriggerService.Get("yTrigger");
yTrigger.Tags = ["10"];
yTrigger.Enable = true;
yTrigger.OnEnter.Add(function(player) {
var sts = player.Properties.Get("pid").Value = "<B><color=lime>Негр</color></B>";   
var skin = contextedProperties.GetContext(player).SkinType.Value = 1;
var hp =
contextedProperties.GetContext(player).MaxHp.Value = 1025;
skin.Value = true;
skin.Value = false;
skin.Value = true;
});

var rTrigger = AreaPlayerTriggerService.Get("rTrigger");
rTrigger.Tags = ["11"];
rTrigger.Enable = true;
rTrigger.OnEnter.Add(function(player) {
player.Ui.Hint.Value = "Ты Non rp!"
var adm = player.Build.FlyEnable.Value = true; 
var adm = player.Properties.Get("pid").Value = 
"<B><color=black>НОН_РП</color></B>";
var adm = player.inventory.Main;
adm.Value = true;
adm.Value = false;
adm.Value = true;
})
var updTrg = 
AreaPlayerTriggerService.Get("UpdTrigger"); 
updTrg.Tags = ["upd"]; 
updTrg.Enable = true; 
updTrg.OnEnter.Add(function(){ 
list = []; 
curenc = 0; 
ato = 0; 
var e = Players.GetEnumerator(); 
while(e.moveNext()){ 
list.push(e.Current); 
} 
}); 

var choseTrg = AreaPlayerTriggerService.Get("ChoseTrigger"); 
choseTrg.Tags = ["chose"]; 
choseTrg.Enable = true; 
choseTrg.OnEnter.Add(function(p){ 
ato = list[curenc]; 
p.Ui.Hint.Value="> "+ato; 
if(curenc < (list.length - 1))curenc++; 
else curenc = 0; 
}); 

var banTrg = AreaPlayerTriggerService.Get("BanTrigger") 
banTrg.Tags = ["ban"]; 
banTrg.Enable = true; 
banTrg.OnEnter.Add(function(p){ 
Ban(ato); 
p.Ui.Hint.Value=ato+" Ты забанен "; 
function Ban(player){ 
p=player 
p.Spawns.Spawn(); 
p.Spawns.Despawn(); 
p.Build.BuildRangeEnable.Value=false; 
p.Ui.Hint.Value="you are banned"; 
} 
})

VAreaTag = "тп";
var VTrigger = AreaPlayerTriggerService.Get("VTrigger"); 
VTrigger.Tags = [VAreaTag]; 
VTrigger.Enable = true; 
VTrigger.OnEnter.Add(function (player) {       
Teams.Get("Red").Add(player);
});

DAreaTag = "ак";
var DTrigger = AreaPlayerTriggerService.Get("DTrigger"); 
DTrigger.Tags = [DAreaTag]; 
DTrigger.Enable = true; 
DTrigger.OnEnter.Add(function (player) {       
Teams.Get("Blue").Add(player);
});

// задаем что выводить вверху 
Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" }; 
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" };

// задаем макс смертей команд 
var maxDeaths = "<B><color=Green>Повстанцы Хаоса</color></B>"; 
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths; 
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths2 = "<B><color=Blue>Эпсилон 11</color></B>";
 
// ������ ��������� 
Ui.getContext().Hint.Value = "<B><color=White>...</color></B>";

//
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);
  if (player.id  == "EA673076CF669F"||player.id == ""||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B"||player.id == "5476D6FE9BCC1E6B")
  {
   player.Properties.Get("pid").Value = "<B><color=red>НОН_РП</color></B>";   
  }                                
});
//
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);

player.Properties.Get("pid").Value = "<B><color=White>Player</color></B>";                                                                                   

});
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);

player.Properties.Get("aa").Value = player.Id.slice(0,8) + "                                                                                     " + player.Id.slice(8,16);
});
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "<B><color=red>Murders</color></B>",
  ShortDisplayName: "<B><color=red>Murders</color></B>"
 },
 {
  Value: "aa",
  DisplayName: "<B><color=lime>ID</color></B>",
  ShortDisplayName: "<B><color=lime>ID</color></B>"
 },
 {
  Value: "pid",
  DisplayName: "<B><color=orange>Status</color></B>",
  ShortDisplayName: "<B><color=orange>Status</color></B>"
 },
 {
  Value: "Scores",
  DisplayName: "<B><color=yellow>Money</color></B>",
  ShortDisplayName: "<B><color=yellow>Money</color></B>"
 }
];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "Statistics\Deaths",
 ShortDisplayName: "Statistics\Deaths"
};
// счетчик убийств
Damage.OnKill.Add(function(player, killed) {
 if (killed.Team != null && killed.Team != player.Team) {
  ++player.Properties.Kills.Value;
  player.Properties.Scores.Value += 500;
 }
});

// ����� �� ����� � ������� 
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn();
contextedProperties.GetContext().MaxHp.Value = 1000;
});
 
// ������ ��������� 
Ui.getContext().Hint.Value = "Hint/BuildBase"; 

// ������������ ��������� 
var inventory = Inventory.GetContext(); 
inventory.Main.Value = false; 
inventory.Secondary.Value = false; 
inventory.Melee.Value = false; 
inventory.Explosive.Value = false; 
inventory.Build.Value = false; 
inventory.BuildInfinity.Value = false; 
 
// ��������� ��� ������ ����� 
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear; 
 
// ������������ ����� 
Spawns.GetContext().RespawnTime.Value = 10;
