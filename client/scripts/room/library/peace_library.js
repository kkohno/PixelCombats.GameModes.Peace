module.exports = {
    set_peace_inventory,
    set_peace_build_settings
};

// разрешаем все что можно для строительства
function set_peace_inventory() {
    // настройка инвентаря
    var inventory = Inventory.GetContext();
    inventory.Main.Value = false;
    inventory.Secondary.Value = false;
    inventory.Melee.Value = true;
    inventory.Explosive.Value = false;
    inventory.Build.Value = true;
    inventory.BuildInfinity.Value = true;
}

function set_peace_build_settings() {
    Build.GetContext().Pipette.Value = true;
    Build.GetContext().BalkLenChange.Value = true;
    Build.GetContext().SetSkyEnable.Value = true;
    Build.GetContext().GenMapEnable.Value = true;
    Build.GetContext().ChangeCameraPointsEnable.Value = true;
    Build.GetContext().QuadChangeEnable.Value = true;
    Build.GetContext().BuildModeEnable.Value = true;
    Build.GetContext().CollapseChangeEnable.Value = true;
    Build.GetContext().RenameMapEnable.Value = true;
    Build.GetContext().ChangeMapAuthorsEnable.Value = true;
    Build.GetContext().LoadMapEnable.Value = true;
    Build.GetContext().ChangeSpawnsEnable.Value = true;
}