# G-Universe

front applications of G-Universe.

## Installation

 - Install the latest version of docker-ce. ( [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/) | [Debian](https://docs.docker.com/install/linux/docker-ce/debian/) )
 - Install the latest version of [docker-compose](https://docs.docker.com/compose/install/#install-compose) (prefer pip install).
 - Add your user to the `docker` group, using `sudo adduser $USER docker` and logout/logback to your computer
 - Copy `docker-compose.dist.yml` to `docker-compose.yml`
 - Then run the `./aliases.sh reload` script.
 - finally run the `./aliases.sh serve` to access app on `http://localhost:4200/`.

## Coding style and Standards

- Respect best practices for [javascript](https://github.com/ryanmcdermott/clean-code-javascript) and [php](https://github.com/jupeter/clean-code-php/blob/master/README.md).
- Respect [AirBnB standards guideline](https://github.com/airbnb/javascript) for javascript.

Try to inspire you as mush as you can of [functional programing](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84), it will make your code cleaner, reusable and easy to test. 
You will find equivalent in every programming language.

## Git

Follow [the documentation](documentation/who-to-git.md) to learn who to use git on this project.
Please use the [git configuration](documentation/git-config.md) of this project.

### Git Hooks

Git hooks exist as simple text files in your `/hooks` directory.
They are inject inside `.git/hooks` using symbolic link during `./aliases.sh reload`.

- `pre-commit` hook perform TsLint syntactic checkup over the all code base.

## Every day usage

Run the `./bin/docker reload` script and start using commands from `aliases.sh` script!

### Aliases commands

All commands use `front` folder as working directory. 

    ./aliases.sh serve
Lunch angular web server on `http://localhost:4200/`

    ./aliases.sh npm ...
Direct access to npm

    ./aliases.sh npm ...
Direct access to npm

    ./aliases.sh ng ...
Direct access to angular cli console

    ./aliases.sh tslint
Lunch tslint checkup against all application
