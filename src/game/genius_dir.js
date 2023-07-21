let directories;
directories = {
    folders: {
        main: {
            files: ['index.html', '6575.dat', 'tests.pwl',
                'main.html', '8467.dat', 'admin.pwl', 'board.html',
                '3496.dat', 'super.pwl', 'data.html', '3467.dat',
                'logs.txt', '1342.asp', '8230.dat', 'scroll.js', '2343.asp',
                '3524.dat', 'mo.js', '2344.asp', '2309.dat', 'index.css',
                'help.html', '9275.dat', '3245.asp', '4365.dat', '3454.asp', '4398.dat'
            ],
            folders: {
                movies: { ...},
                another_folder: { ...}
            }
        },
        data: {
            files: ['legal', 'almost legal', 'barely legal', 'illegal',
                'fbi gonna come illegal', 'windows1', 'windows2', 'windows3',
                'windows95', 'windows98', 'windowsnt', 'windowsme', 'windows2k',
                'windowsxp', 'server2k', 'server23', 'office2000', 'officexp',
                'visual studio', 'C#', 'J#', 'VB'
            ]
        },
        logs: {
            files: "Random.logs()"
        }
    }
    ,
    files: [
        '.temp', '.autoexec', '.bakup', 'shell32.dll',
        'temp.txt', 'setup.exe', 'system32', 'system.exe'
    ],
}
// final solution: storing all path objects individually
// push current dir obj.

// What was the point in the above code?
// theory of nested object's this reference
let this_theory = {
    nested: {
        self() { return this },
        files: [1, 2, 3]
    },
    self() { return this },
}
console.log(this_theory.nested.self())
