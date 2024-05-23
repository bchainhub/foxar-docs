#### Watch Options

`-w` [*path...*]  
`--watch` [*path...*]  
Watch specific file(s) or folder(s).

By default, the project's source directory is watched.

`-d` _delay_  
`--delay` _delay_  
File update debounce delay.

During the delay, incoming change events are accumulated and only once the delay has passed, is an action taken.  
Note that this does not mean a command will be started: if `--no-restart` is given and a command is already running, the outcome of the action will be to do nothing.

Defaults to 50ms. Parses as decimal seconds by default, but using an integer with the `ms` suffix may be more convenient.

When using `--poll` mode, you'll want a larger duration, or risk overloading disk I/O.

`--no-restart`  
Do not restart the command while it's running.

`--run-all`  
Explicitly re-run the command on all files when a change is made.
