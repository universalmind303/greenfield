# Grocery List

Stay within budget while shopping.

## Team

  - __Product Owner__: Elijah Schow
  - __Scrum Master__: Cory Grinstead
  - __Development Team Members__:
    - Burk McRae
    - Jonathan Granstaff

## Table of Contents

1. [Team](#team)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Run Locally](#run-locally)
    1. [Deploy](#deploy)
1. [Contributing](#contributing)

## Usage

> TODO: add some usage instructions

## Requirements

- Node 5.xx.x +
- ReactJS
- Webpack
- (see `package.json` for details)

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Run Locally
```sh
npm run dev
```
NOTE: live-server will serve files at `http://localhost:8080/client/public/`,
but the real server runs


### Deploy

Follow [this guide](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps) to configure your deployment server. When you're ready to deplay:

#### On your computer:

1. `git pull --rebase upstream master`
2. `git push live master`

#### On the server:

1. `npm install`
2. `webpack -p`
3. `npm start`

#### If you're having trouble:

1. **Location:** Before running `npm install` on the server, make sure that you in the working directory. e.g. if the server file lives at `/var/grocerybag/server/server.js`, go to `/var/grocerybag/` in the terminal.
2. **Process Manager:** Make sure that PM2 is install globally. If not, run:

    ```sh
    npm install pm2 -g
    ```

## Contributing

See [CONTRIBUTING.md](https://github.com/unexpected-lion/ourglass/blob/master/contributing.md) for contribution guidelines.
