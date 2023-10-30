const config = {
    TOKEN: "xoxc-6113539038482-6136532874352-6126180048705-0e18a221c8ca1c73f33383a0c9c1f614c0da56c28f8dc77c7a388f48a9e91cbf",
    COOKIE: "xoxd-BNeoSONzXgh1YBk8VVXSC7j39liV3XUv2ChxzaIBvt4sV%2FaejJOUgyUIf%2FIfqJiVD%2F%2FPoNjbgnfwqtZ8IcX%2F37WNpXY79du2R1TX2fB7yuikYLkXOzGtDfWjIjfKa5A3FKn2R6WxEe8p7DOHHkuP5z5uPLIUBimJZyb7CFwgTUaYK1VQvFPdhR2ZHT3PTNxZ0TetBlQdMiM%3D",
    TEAM_ID: "jk",
    CHANNEL: "D0638JB90G5",
    CLAUDE_USER: "U063DV84RAQ",

    MAINPROMPT_LAST: false, // Will try to move the main prompt (main + nsfw prompt from SillyTavern) to the bottom, similar to a jailbreak
    MAINPROMPT_AS_PING: false, // Will use the main prompt as the ping message, if this true the PING_MESSAGE setting is ignored. Overrides MAINPROMPT_LAST.
    
    // If false will make Slaude send messages as plain text rather than through Slack's blocks format. The results in Slack should be the same either way.
    USE_BLOCKS: true,

    STREAMING_TIMEOUT: 240000, //Time in milliseconds after which the response stream will force close itself, 0 disables the timeout but is not recommended.

    // The final message we send with an @Claude ping to trigger his response. You can add "@Claude" to this string to control where the ping will be inside the message.
    // If there is no @Claude, the ping will automatically get added in front of the message.
    // Can be whatever you want it to be but keep in mind that it might result in unpredictable responses.
    // Anything we put here will eat into our max available tokens so keep it brief.
    PING_MESSAGE: "Assistant:",

    PORT: 5004
}

export default config;