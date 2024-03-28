import * as peace from './peace_library.js';
import * as API from 'pixel_combats/room';

peace.configure();
peace.create_teams();

async function func() {
  const {
    NewGameVote
  } = await import('pixel_combats/room');

  NewGameVote.OnData.Add(OnVoteData);
  NewGameVote.OnResult.Add(OnVoteResult);

  NewGameVote.Start({
    Variants: [{
      MapId: 0
    }, {
      MapId: 1
    }],
    Timer: 10
  }, 3);
}
async function OnVoteData(v) {
  const {
    log
  } = await import('pixel_combats/debug');
  log.Debug("OnData");
  const data = v.Data;
}
async function OnVoteResult(v) {
  const {
    log
  } = await import('pixel_combats/debug');
  const {
    NewGame
  } = await import('pixel_combats/room');
  if (v.Result === null) return;
  log.Debug("старт новой игры");
  NewGame.RestartGame(v.Result);
}

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
    else if (cmds[0] == 'start_vote') {
      func()
    }
  }
}) 
