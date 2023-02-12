<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Aboudoc/Constant-Product-AMM.git">
    <img src="images/logo.png" alt="Logo" width="100" height="80">
  </a>

<h3 align="center">Constant Sum Automated Market Maker</h3>

  <p align="center">
    A very simple consant sum AMM 
    <br />
    <a href="https://github.com/Aboudoc/Constant-Product-AMM"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Aboudoc/Constant-Product-AMM">View Demo</a>
    ·
    <a href="https://github.com/Aboudoc/Constant-Product-AMM/issues">Report Bug</a>
    ·
    <a href="https://github.com/Aboudoc/Constant-Product-AMM/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://ethereum.org/en/developers/docs/smart-contracts/security/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Hardhat][Hardhat]][Hardhat-url]
- [![Ethers][Ethers.js]][Ethers-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm

  ```sh
  npm install npm@latest -g
  ```

- hardhat

  ```sh
  npm install --save-dev hardhat
  ```

  ```sh
  npm install @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle
  ```

  run:

  ```sh
  npx hardhat
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Aboudoc/Constant-Product-AMM.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

If you need testnet funds, use the [Alchemy testnet faucet](https://goerlifaucet.com/).

**This project shows a basic example of Constant Product AMM**

## Constant sum AMM

Constant product AMM (automated market maker) is a decentralized exchange where 2 tokens are traded.

## Why is it called constant product?

The price of the tokens are determined by a mathematical equation

```sh
X = amount of token A in the contract
Y = amount of token B in the contract
K = a constant that satisfies the following equation

XY = K

```

### Swap - How many dy for dx?

```sh
        xy = k
        (x + dx)(y - dy) = k
        y - dy = k / (x + dx)
        y - k / (x + dx) = dy
        y - xy / (x + dx) = dy
        (yx + ydx - xy) / (x + dx) = dy
        ydx / (x + dx) = dy
```

### Add liquidity - How many dx, dy to add?

```sh
        xy = k
        (x + dx)(y + dy) = k'
```

**No price change, before and after adding liquidity**

```sh
        x / y = (x + dx) / (y + dy)

        x(y + dy) = y(x + dx)
        x * dy = y * dx

        x / y = dx / dy
        dy = y / x * dx
```

### Add liquidity - How many shares to mint?

```sh
        f(x, y) = value of liquidity
        We will define f(x, y) = sqrt(xy)

        L0 = f(x, y)
        L1 = f(x + dx, y + dy)
        T = total shares
        s = shares to mint
```

**Total shares should increase proportional to increase in liquidity**

```sh
        L1 / L0 = (T + s) / T

        L1 * T = L0 * (T + s)

        (L1 - L0) * T / L0 = s
```

```sh
        Claim
        (L1 - L0) / L0 = dx / x = dy / y
```

```sh
        Proof
        --- Equation 1 ---
        (L1 - L0) / L0 = (sqrt((x + dx)(y + dy)) - sqrt(xy)) / sqrt(xy)

        dx / dy = x / y so replace dy = dx * y / x

        --- Equation 2 ---
        Equation 1 = (sqrt(xy + 2ydx + dx^2 * y / x) - sqrt(xy)) / sqrt(xy)

        Multiply by sqrt(x) / sqrt(x)
        Equation 2 = (sqrt(x^2y + 2xydx + dx^2 * y) - sqrt(x^2y)) / sqrt(x^2y)
                   = (sqrt(y)(sqrt(x^2 + 2xdx + dx^2) - sqrt(x^2)) / (sqrt(y)sqrt(x^2))

        sqrt(y) on top and bottom cancels out

        --- Equation 3 ---
        Equation 2 = (sqrt(x^2 + 2xdx + dx^2) - sqrt(x^2)) / (sqrt(x^2)
        = (sqrt((x + dx)^2) - sqrt(x^2)) / sqrt(x^2)
        = ((x + dx) - x) / x
        = dx / x

        Since dx / dy = x / y,
        dx / x = dy / y

        Finally
        (L1 - L0) / L0 = dx / x = dy / y

```

### Remove liquidity - How many tokens to withdraw?

```sh
 Claim
        dx, dy = amount of liquidity to remove
        dx = s / T * x
        dy = s / T * y
```

```sh

        Proof
        Let's find dx, dy such that
        v / L = s / T

        where
        v = f(dx, dy) = sqrt(dxdy)
        L = total liquidity = sqrt(xy)
        s = shares
        T = total supply

        --- Equation 1 ---
        v = s / T * L
        sqrt(dxdy) = s / T * sqrt(xy)

        Amount of liquidity to remove must not change price so
        dx / dy = x / y

        replace dy = dx * y / x
        sqrt(dxdy) = sqrt(dx * dx * y / x) = dx * sqrt(y / x)

        Divide both sides of Equation 1 with sqrt(y / x)
        dx = s / T * sqrt(xy) / sqrt(y / x)
           = s / T * sqrt(x^2) = s / T * x

        Likewise
        dy = s / T * y
```

## Note

This contract assumes that token0 and token1 both have same decimals

Consider fees = 3%

### Further reading

(...soon)

### Sources

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Further reading
- [ ] Deploy script
- [ ] Unit test

See the [open issues](https://github.com/Aboudoc/Constant-Product-AMM.git/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Reda Aboutika - [@twitter](https://twitter.com/AboutikaR) - reda.aboutika@gmail.com

Project Link: [https://github.com/Aboudoc/Constant-Product-AMM.git](https://github.com/Aboudoc/Constant-Product-AMM.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Smart Contract Engineer](https://www.smartcontract.engineer/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Aboudoc/Constant-Product-AMM.svg?style=for-the-badge
[contributors-url]: https://github.com/Aboudoc/Constant-Product-AMM/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Aboudoc/Constant-Product-AMM.svg?style=for-the-badge
[forks-url]: https://github.com/Aboudoc/Constant-Product-AMM/network/members
[stars-shield]: https://img.shields.io/github/stars/Aboudoc/Constant-Product-AMM.svg?style=for-the-badge
[stars-url]: https://github.com/Aboudoc/Constant-Product-AMM/stargazers
[issues-shield]: https://img.shields.io/github/issues/Aboudoc/Constant-Product-AMM.svg?style=for-the-badge
[issues-url]: https://github.com/Aboudoc/Constant-Product-AMM/issues
[license-shield]: https://img.shields.io/github/license/Aboudoc/Constant-Product-AMM.svg?style=for-the-badge
[license-url]: https://github.com/Aboudoc/Constant-Product-AMM/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/r%C3%A9da-aboutika-34305453/?originalSubdomain=fr
[product-screenshot]: https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.webp
[Hardhat]: https://img.shields.io/badge/Hardhat-20232A?style=for-the-badge&logo=hardhat&logoColor=61DAFB
[Hardhat-url]: https://hardhat.org/
[Ethers.js]: https://img.shields.io/badge/ethers.js-000000?style=for-the-badge&logo=ethersdotjs&logoColor=white
[Ethers-url]: https://docs.ethers.org/v5/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
