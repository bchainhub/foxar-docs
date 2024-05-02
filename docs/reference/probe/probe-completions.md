---
title: Probe completions
---

### NAME

probe-completions - Generate shell completions script

### SYNOPSIS

`probe completions` _shell_

### DESCRIPTION

Generates a shell completions script for the given shell.

Supported shells are:

- bash
- elvish
- fish
- powershell
- zsh

### OPTIONS

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Generate shell completions script for zsh:
   ```sh
   probe completions zsh > $HOME/.oh-my-zsh/completions/_probe
   ```

### SEE ALSO

[probe](./probe.md)
