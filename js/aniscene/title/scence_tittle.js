class ScenceTitle extends Scene {
    constructor(game) {
        super(game);
        this.label = new Label(game,'按K 开始游戏', 120, 300);
        this.logo = new AniImage('logo',this.game, 10, 100);
        this.setupInputs();
        this.addElements(this.label);
        this.addElements(this.logo);
        this.game = game;

    }

    setupInputs() {
        var self = this;
        self.game.registerEvent('k', function () {
            self.game.score  = 0;
            self.game.replaceScene(new SceneMain(self.game));
        });
    }
}