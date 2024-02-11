Blockly.defineBlocksWithJsonArray([
{
  "type": "ultrasonic_read",
  "message0": "Ultrasonic trig pin: %1 echo pin: %2 read distance (cm)",
  "args0": [
    {
      "type": "input_value",
      "name": "trig_pin",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "echo_pin",
      "check": "Number"
    },
  ],
  "output": "Number",
  "colour": "#004098",
  "tooltip": "Get distance from sensor",
  "helpUrl": ""
}
]);
