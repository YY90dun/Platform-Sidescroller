function checkCol(dir) {
  for (let i = 0; i < plats.length; i++) {
    let plat = plats[i];
    if (rectCollide(player, plat)) {
      if (dir == "left") {
        player.x = plat.x + plat.w;
      } else if (dir == "right") {
        player.x = plat.x - player.w;
      } else if (dir == "down") {
        player.y = plat.y - player.h;
        player.g = 0;
        jumps = 2;
      } else if (dir == "up") {
        player.y = plat.y + plat.h;
        player.g = 0;
      }
    }
    if (player.g != 0) {
      if (jumps == 2) {
        jumps = 1;
      }
    }
  }
}

function checkDie() {
  for (let i = 0; i < hzrdz.length; i++) {
    let rh = hzrdz[i];
    if (rectCollide(player, rh)) {
      reset();
    }
  }
}

function drawPlats() {
  ctx.fillStyle = "#7f7f7f";
  for (let i = 0; i < plats.length; i++) {
    let plat = plats[i];
    ctx.fillRect(plat.x - view.x, plat.y - view.y, plat.w, plat.h);
  }
  ctx.fillStyle = "#00ff00";
  for (let i = 0; i < deco.length; i++) {
    let dec = deco[i];
    ctx.fillRect(dec.x - view.x, dec.y - view.y, dec.w, dec.h);
  }
}

function drawHazards() {
  ctx.fillStyle = "#ff0000";
  for (let i = 0; i < hzrdz.length; i++) {
    let rh = hzrdz[i];
    ctx.fillRect(rh.x - view.x, rh.y - view.y, rh.w, rh.h);
  }
}

function rectCollide(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.y + rect1.h > rect2.y
  );
}
