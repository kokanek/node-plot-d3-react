module.exports = {
    finalNodes: [{ id: 'Harry', label: 'test', color: 'red', size: 500 }, { id: 'Sally', name: 'test', color: 'yellow', size: 6000 }, { id: 'Alice', color: 'green', size: 1000 }],
    finalLinks: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }],

    nodes: [
        {
            id: 'node_id_1',
            totalMemory: 10,
            usedMemory: 8,
            cpuCores: 8,
            diskSpace: 500
        },
        {
            id: 'node_id_2',
            totalMemory: 100,
            usedMemory: 40,
            cpuCores: 16,
            diskSpace: 1000
        },
        {
            id: 'node_id_3',
            totalMemory: 50,
            usedMemory: 5,
            cpuCores: 16,
            diskSpace: 250
        },
        {
            id: 'node_id_4',
            totalMemory: 25,
            usedMemory: 23,
            cpuCores: 32,
            diskSpace: 250
        },
        {
            id: 'node_id_5',
            totalMemory: 70,
            usedMemory: 35,
            cpuCores: 16,
            diskSpace: 1000
        }
    ],

    links: [
        {
            source: 'node_id_1',
            target: 'node_id_2',
            load: 75 // number between 1 to 100
        },
        {
            source: 'node_id_4',
            target: 'node_id_2',
            load: 80 // number between 1 to 100
        },
        {
            source: 'node_id_4',
            target: 'node_id_1',
            load: 90 // number between 1 to 100
        },
        {
            source: 'node_id_4',
            target: 'node_id_3',
            load: 60 // number between 1 to 100
        },
        {
            source: 'node_id_4',
            target: 'node_id_5',
            load: 50 // number between 1 to 100
        },
    ]
}