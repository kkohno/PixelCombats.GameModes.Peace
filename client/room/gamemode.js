import * as peace from './peace_library.js';
import * as API from 'pixel_combats/room';

peace.configure();
peace.create_teams();

API.Chat.OnMessage.Add((msg) => {
  const sender = API.Players.GetByRoomId(msg.Sender)

  if (msg.Text.trim()[0] == '/' && sender.IdInRoom == 1) {
    const cmds = msg.Text.trim().slice(1, msg.Text.length).split(' ') 

    if (cmds[0] == 'tp_me') {
      let other = API.Players.GetByRoomId(Number(cmds[1]))
      other.SetPositionAndRotation(sender.Position, sender.Rotation) 
    }
    else if (cmds[0] == 'show_rids') {
      let str = 'IDS:\n'
      for (let a of API.Players) {
        str += `${a.NickName}: ${a.IdInRoom}`
      }
      API.room.PopUp(str) 
    }
    else if (cmds[0] == 'fly') {
      let other = API.Players.GetByRoomId(Number(cmds[1]))
      other.Build.FlyEnable.Value = Boolean(cmds[2]) 
    }
  }
}) 
