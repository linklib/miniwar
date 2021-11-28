import React from 'react'
import { createReactEditorJS } from 'react-editor-js'
//import SimpleImage from '@editorjs/simple-image'
import CheckList from '@editorjs/checklist'
import Image from '@editorjs/image'
import Uploader from '@prisma-cms/uploader'

/*
function UploadFromEditor(file) {
  <Uploader file={file} name="post" directorya=""/>
}
*/
const ReactEditorJS = createReactEditorJS()

export const CustomEditor = () => {
  return (
    <ReactEditorJS
      tools={{
        //simpleImage: SimpleImage,
        checklist: CheckList,
        image: {
          class: Image,
          config: {
            uploader: {
              uploadByFile(file: string | Blob) {
                console.log('file', file)

                return Uploader.upload(file).then(() => {
                  return {
                    success: 1,
                    file: {
                      url: 'http://localhost:3000/uploads/images/1638094124655-Z62_3167.jpg',
                    },
                  }
                })
              },
            },
          },
        },
      }}
    />
  )
}

export default CustomEditor
