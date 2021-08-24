import List from "../../utils/List";
import Project from "../../utils/Project";

const MESSENGER: Project = {
    name: 'Messenger clone',
    start: new Date(2021, 7), // aug 2021
    description: [
        'Fixed bug where messages did not properly send',
        'Implemented read receipts',
        'Redesigned database for group messages',
        'Implemented unit tests',
    ],
    skills: [
        'Circle CI',
        'Git',
        'JavaScript',
        'Jest',
        'PostgreSQL',
        'React',
        'Redux',
        'REST',
        'Test-Driven Development',
    ],
    sourceUrl: 'https://github.com/tyfoster97/green-apple'
}

const PORTFOLIO: Project = {
    name: 'Portfolio site',
    start: new Date(2021, 4), // mar 2021
    description: [
        'Initial implementation in Angular and TypeScript',
        'Migrated to React using Material UI for base components',
        'Hosted using Azure Static Web Apps'
    ],
    skills: [
        'Git',
        'Jest',
        'Microsoft Azure',
        'React',
        'Test-Driven Development',
        'Travis CI',
        'TypeScript',
    ]
}

const HR_APP: Project = {
    name: 'Employee Evaluation Survey',
    start: new Date(2019, 9), // oct 2019
    end: new Date(2020, 3), // apr 2020
    description: [
        'Designed and implemented back-end',
        'Implemented continous integration service',
        'Implemented unit tests',
    ],
    skills: [
        'Astah UML',
        'Git',
        'JavaScript',
        'Jest',
        'MongoDB',
        'Mongoose',
        'React',
        'Travis CI',
        'TypeScript',
        'Test-Driven Development',
        'Unified Modeling Language',
    ]
}

const IOT_DEVICE = {
    name: 'Embedded C IoT Device',
    start: new Date(2020, 10), // nov 2020
    end: new Date(2020, 11), // dec 2020
    description: [
        'Configured sensor to blink LED at different rates depending on the temperature range',
        'Implemented software to modify EEPROM data with REST API calls',
    ],
    skills: [
        'ATmega328p',
        'C',
        'C++',
        'Git',
        'REST'
    ],
    sourceUrl: 'https://github.com/tyfoster97/embedded-c-iot-device'
}

const MOMBOT = {
    name: 'Discord Server Admin Chat Bot',
    start: new Date(2021, 2), // mar 2021
    description: [
        'Implemented service to log error messages to a Discord Server',
        'Implemented features to simulate rolling die and flipping coins',
    ],
    skills: [
        'Git',
        'Jest',
        'Linux',
        'Travis CI',
        'TypeScript',
        'Test-Driven Development',
    ],
    sourceUrl: 'https://github.com/tyfoster97/_mombot'
}

const PROJECTS: List<Project> = {
    name: 'Projects',
    items: [
        PORTFOLIO,
        MESSENGER,
        MOMBOT,
        HR_APP,
        IOT_DEVICE,
    ]
}

export default PROJECTS