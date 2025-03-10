var StateInit = {
    preload: function() {
        //
        //This file sets up the preloader
        //
        //
        //
        game.load.image("loadingEmpty", "images/loading/progress_none.png");
        game.load.image("loadingFull", "images/loading/progress_all.png");
        game.input.mspointer.stop();
        if (isMobile == true) {
            if (useLandscape == true) {
                game.scale.forceOrientation(true, false);
            } else {
                game.scale.forceOrientation(false, true);
            }
            game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
            game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
        }
    },
    create: function() {
        game.state.start("StateLoad");
    },
    update: function() {},
    rightWay: function() {
        if (model.state != "main") {
            location.reload();
        }
        document.getElementById(wrongTag).style.display = "none";
    },
    wrongWay: function() {
        document.getElementById(wrongTag).style.display = "block";
    }
}