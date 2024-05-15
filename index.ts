#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
// classes player & opponent
class Player {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}

class Opponent {
    name: string
    fuel: number = 100
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
// player name and opponent select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Kindly Enter Your Name:"
})
do {
    let opponent = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select Your Opoonent",
        choices: ["Skeleton", "Assassin", "Zombie"]
    })
    //Gather data
    let p1 = new Player(player.name)
    let o1 = new Opponent(opponent.select)

    //Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red`${p1.name} Fuel is ${p1.fuel}`)
                console.log(chalk.bold.green`${o1.name} Fuel is ${o1.fuel}`)
                if (p1.fuel >= 0) {
                    console.log(chalk.bold.italic.red("You Loose, Better Luck Next Time"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.red`${o1.name} Fuel is ${o1.fuel}`);
                console.log(chalk.bold.green`${p1.name} Fuel is ${p1.fuel}`)
                if (o1.fuel >= 0) {
                    console.log(chalk.bold.green.italic("You Win"))
                    process.exit()
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
            process.exit()
        }
    }

    // Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red`${p1.name} Fuel is ${p1.fuel}`)
                console.log(chalk.bold.green`${o1.name} Fuel is ${o1.fuel}`)
                if (p1.fuel >= 0) {
                    console.log(chalk.bold.italic.red("You Loose, Better Luck Next Time"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.red`${o1.name} Fuel is ${o1.fuel}`);
                console.log(chalk.bold.green`${p1.name} Fuel is ${p1.fuel}`)
                if (o1.fuel >= 0) {
                    console.log(chalk.bold.green.italic("You Win"))
                    process.exit()
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
            process.exit()
        }
    }

    //Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.bold.red`${p1.name} Fuel is ${p1.fuel}`)
                console.log(chalk.bold.green`${o1.name} Fuel is ${o1.fuel}`)
                if (p1.fuel >= 0) {
                    console.log(chalk.bold.italic.red("You Loose, Better Luck Next Time"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bold.red`${o1.name} Fuel is ${o1.fuel}`);
                console.log(chalk.bold.green`${p1.name} Fuel is ${p1.fuel}`)
                if (o1.fuel >= 0) {
                    console.log(chalk.bold.green.italic("You Win"))
                    process.exit()
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
            process.exit()
        }
    }
} while (true);

