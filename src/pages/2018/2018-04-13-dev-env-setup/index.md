---
path: "/dev-env-setup"
date: "2018-04-14"
title: "개발환경 세팅하기"
tags: ['zsh', 'ohmyzsh', 'pyenv', 'pyenv-virtualenv', 'autoenv', 'pure-prompt']
excerpt: ""
type: ""
---

> 개발환경 세팅은 자주 있는 일이 아니기 때문에 기억하기 쉽지 않다. 빠르게 셋업하고 개발에 집중하기 위해 정리!

## 1. Setup script

```bash
# Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# zsh
brew install zsh

# oh-my-zsh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

# Yarn
brew install yarn

# pure-prompt
npm install --global pure-prompt

# pyenv
brew install pyenv

# pyenv-virtualenv
brew install pyenv-virtualenv

# autoenv
brew install autoenv

# Start
source ~/.zshrc
```

---

## 2. `.zshrc`에 설정 추가하기

```bash
# ~/.zshrc

# pyenv
eval "$(pyenv init -)"

# pyenv-virtualenv
eval "$(pyenv virtualenv-init -)"

# autoenv
source /usr/local/opt/autoenv/activate.sh

# pure-prompt
autoload -U promptinit; promptinit
prompt pure
```

---

## 3. `.gitconfig` 설정하기

```
[user]
	name = username
	email = user@gmail.com
[alias]
	co = checkout
	s = status --short --branch
	d = diff
	ds = diff --staged
	commend = commit --amend --no-edit
```

---

## 4. `.env` 추가하기
- python 프로젝트를 시작한다면, 프로젝트의 루트 디렉토리에 `.env` 파일을 만들고 아래 코드를 추가한다.

```
pyenv activate project-name
```
