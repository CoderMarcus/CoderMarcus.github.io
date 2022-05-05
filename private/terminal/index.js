const emulator = new Terminal.Emulator();
const emulatorState = Terminal.EmulatorState.createEmpty();

const commandStr = 'ls';
const plugins = [];

const newEmulatorState = emulator.execute(emulatorState, commandStr, plugins)
newEmulatorState.getOutputs()