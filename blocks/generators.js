Blockly.Python['ultrasonic_read'] = function(block) {
  Blockly.Python.definitions_['import_ultrasonic'] = 'import Ultrasonic';

  var value_trig_pin = Blockly.JavaScript.valueToCode(block, 'trig_pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_echo_pin = Blockly.JavaScript.valueToCode(block, 'echo_pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `Ultrasonic.read(${value_trig_pin}, ${value_echo_pin})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['ultrasonic_read'] = function(block) {
  var value_trig_pin = Blockly.JavaScript.valueToCode(block, 'trig_pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_echo_pin = Blockly.JavaScript.valueToCode(block, 'echo_pin', Blockly.JavaScript.ORDER_ATOMIC);

  var functionName = Blockly.JavaScript.provideFunction_(
    `ultrasonic_read`,
    [
      'float ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(int trig_pin, int echo_pin) {',
      '  digitalWrite(trig_pin, LOW);',
      '  delayMicroseconds(2);',
      '  digitalWrite(trig_pin, HIGH);',
      '  delayMicroseconds(10);',
      '  digitalWrite(trig_pin, LOW);',
      '  ',
      '  unsigned long duration = pulseIn(echo_pin, HIGH);',
      '  float distance = duration / 58.2;',
      '  ',
      '  if (distance >= 200 || distance <= 0) {',
      '    distance = -1;',
      '  }',
      '  ',
      `  return distance;`,
      '}'
    ]
  );

  var code = `${functionName}(${value_trig_pin}, ${value_echo_pin})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

