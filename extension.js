({
    name: "Ultrasonic2", // Category Name
    description: "Get distance from ultrasonic sensor (support any boards)",
    author: "microBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#004098", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="ultrasonic_read">
                    <value name="trig_pin">
                        <shadow type="math_number">
                            <field name="NUM">2</field>
                        </shadow>
                    </value>
                    <value name="echo_pin">
                        <shadow type="math_number">
                            <field name="NUM">3</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ], 
    supportArduinoPlatform: true,
    depends: [ ] // Arduino library
});
