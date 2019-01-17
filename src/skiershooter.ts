interface Skier {
    slide(): void;
}

interface Shooter {
    shoot(): void;
}

type SkierAndShooter = Skier & Shooter;

class Biathelete implements SkierAndShooter {

    slide(): void {
        console.log("Sliding...");
    }

    shoot(): void {
        console.log("Shooting...");
    }


}