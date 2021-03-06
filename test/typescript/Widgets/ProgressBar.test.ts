import {Color, ProgressBar, ProgressBarProperties} from 'tabris';

let widget: ProgressBar = new ProgressBar();

// Properties
let maximum: number;
let minimum: number;
let tintColor: Color;
let selection: number;
let state: 'error' | 'normal' | 'paused';

maximum = widget.maximum;
minimum = widget.minimum;
tintColor = widget.tintColor;
selection = widget.selection;
state = widget.state;

widget.maximum = maximum;
widget.minimum = minimum;
widget.tintColor = tintColor;
widget.selection = selection;
widget.state = state;

let properties: ProgressBarProperties = {maximum, minimum, tintColor, selection, state};
widget = new ProgressBar(properties);
widget.set(properties);
