# G-Universe

front applications of G-Universe.

## Installation

 - Install the latest version of docker-ce. ( [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/) | [Debian](https://docs.docker.com/install/linux/docker-ce/debian/) )
 - Install the latest version of [docker-compose](https://docs.docker.com/compose/install/#install-compose) (prefer pip install).
 - Add your user to the `docker` group, using `sudo adduser $USER docker` and logout/logback to your computer
 - Copy `docker-compose.dist.yml` to `docker-compose.yml`
 - Then run the `./aliases.sh reload` script.
 - finally run the `./aliases.sh serve` to access app on `http://localhost:4200/`.

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
