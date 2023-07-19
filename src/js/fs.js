const dirs = {
    localhost: {
        name: '/',
        folders: [
            {
                name: 'home',
                folders: [
                    { name: 'movies', files: ['john wick.mp4'] }, { name: 'games' }, { name: 'pictures' },
                ],
                files: ['wallpaper03.jpg', 'pic.png', 'firefox.exe', 'youtube.link']
            },
            {
                name: 'desktop',
                files: ['dubai.png', 'plan.txt']
            }
        ],
        files: ['system.sys'],
    },
    "www.microsoft.com": [],
}

const root = dirs.localhost
let path_addr = root;
// in '/' dir. cd to 'home'
// check if 'home' exists
let cd_to = 'home'
function isFolder(path, name) {
    if (!path.folders) return false;
    for (const folder of path.folders) {
        if (folder.name === name)
            return true;
    }
    return false;
}
let cd_folder = path_addr.folders.find(folder => folder.name === cd_to)


// $ls: listing files & folders
// console.log(`Folders: ${path_addr[FS_INFO.FOLDERS]}\n` +
//     `Files: ${path_addr[FS_INFO.FILES]}`
// );
