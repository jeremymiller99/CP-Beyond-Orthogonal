class Movement extends Phaser.Scene {
    constructor() {
        super('movementScene');
    }

    preload() {
        this.load.spritesheet('player', 'assets/spritesheets/Character_002.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }

    create() {
        console.log('now in movement scene 👍');

        const { width, height } = this.scale;

        this.cameras.main.setBackgroundColor('#87CEEB');

        this.player = this.physics.add.sprite(width / 2, height / 2, 'player');
        this.player.setCollideWorldBounds(true);
        
        this.anims.create({
            key: 'walk_down',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'walk_left',
            frames: this.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'walk_right',
            frames: this.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'walk_up',
            frames: this.anims.generateFrameNumbers('player', { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        const speed = 150;
        let velocityX = 0;
        let velocityY = 0;

        if (cursors.left.isDown) {
            velocityX = -speed;
            this.player.anims.play('walk_left', true);
        } else if (cursors.right.isDown) {
            velocityX = speed;
            this.player.anims.play('walk_right', true);
        } else if (cursors.up.isDown) {
            velocityY = -speed;
            this.player.anims.play('walk_up', true);
        } else if (cursors.down.isDown) {
            velocityY = speed;
            this.player.anims.play('walk_down', true);
        } else {
            this.player.anims.stop();
        }

        this.player.setVelocity(velocityX, velocityY);
    }
}
