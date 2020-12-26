const fs = require('fs')
const path = require("path")

// read all files here
fs.readdir('./', (err, files) => {

  // loop on all files
    files.forEach(file => {

      // split the one file name by '.'
      const fileArr = file.split('.')

      // the files you need to create and the types you need to add
      const types = {
        imgs : ['bmp', 'jpeg', 'jpg', 'gif', 'tiff', 'png', 'pcx', 'rle', 'dib', 'svg'],
        apps : ['exe', 'deb', 'msi', 'gz'],
        pdfS : ['pdf', 'txt', 'bok'],
        ziped : ['zip', 'rar'],
        vids : ['mp4', 'm4p','ogg', 'webm', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'wmv'],
        sounds: ['mp3'],
        microsoftFiles: ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'],
        photoshop: ['psd'],
        illustrator: ['ai'],
        XD: ['xd'],
      }

      // loop on the all above types
      for(const type in types) {
        // create a file with the key on element on the object
        fs.mkdir(`./${type}`, () => {})
        // loop for all inner types EX: ['pdf', 'txt', 'docx', 'bok']
        types[type].forEach(oneType => {
          // check if the last element in the solited array of the file name mach the onetype
            if(fileArr[fileArr.length - 1] == oneType) {
              // match the pathname and move it to the new dir with the same name
              const currentPath = path.join(__dirname, file)
              const newPath = path.join(__dirname, type, file)
              fs.rename(currentPath, newPath, (err) => {
                if(err) {console.log(err)} else {console.log('done')}
              })
            }
          })
      }
    })
})