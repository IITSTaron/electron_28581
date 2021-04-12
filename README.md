# Issue 28581 reproduction

## https://github.com/electron/electron/issues/28581

Steps to reproduce:
* run electron:build in package.json
* run ./dist_electron/electron_28581 Setup 0.1.0.exe

Expected result:
* Taskbar icon is switching between red and green every second

Actual Result: 
* Taskbar icon is not changing at all 

A working example of the expected result can be seen by running the ./dist-electron/win-unpacked/electron_28581.exe

Thank you for your assistance!
