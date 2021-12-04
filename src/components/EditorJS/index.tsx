/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import React from 'react'
//import { createReactEditorJS } from 'react-editor-js'
import EditorJs from '@natterstefan/react-editor-js'
//import SimpleImage from '@editorjs/simple-image'
import CheckList from '@editorjs/checklist'
import Image from '@editorjs/image'
import EditorJS from '@editorjs/editorjs'

//import { PrismaClient } from '@prisma/client'

//import Header from '@editorjs/header'
//import Uploader from '@prisma-cms/uploader'

/*
function UploadFromEditor(file) {
  <Uploader file={file} name="post" directorya=""/>
}
*/
//const ReactEditorJS = createReactEditorJS()

/*
const prisma = new PrismaClient()

async function main(outputData: string) {
  const updateContent = await prisma.post.update({
    where: {
      id: 'ckwopu10s0520f9wgfv4keyij',
    },
    data: {
      content: outputData,
    },
  })
  console.log('curpost: ', updateContent)
}
*/

export const CustomEditor = () => {
  let editor: EditorJS | null = null

  const onSave = async () => {
    try {
      const outputData = await editor?.save()
      /*
      main(outputData)
        .catch((e) => console.error(e))
        .finally(async () => await prisma.disconnect())
*/
      console.log('Article data: ', outputData)
    } catch (e) {
      console.log('Saving failed: ', e)
    }
  }

  return (
    <>
      <button onClick={onSave}>Save</button>

      <EditorJs
        holder="custom-editor-container"
        tools={{ image: Image, checklist: CheckList }}
        editorInstance={(editorInstance) => {
          // invoked once the editorInstance is ready
          editor = editorInstance
        }}
      >
        <div id="custom-editor-container" />
      </EditorJs>
      {/*
      <ReactEditorJS
        tools={{
          //simpleImage: SimpleImage,
          checklist: CheckList,
          image: {
            class: Image,
            config: {
            uploader: {
              uploadByFile(file: string | Blob) {
                //console.log('file', file)

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
      />*/}
    </>
  )
}

export default CustomEditor
