import React, { useMemo } from 'react'
import { useCurrentUser } from 'src/hooks/useCurrentUser'

import CreatePostForm from './Form'

/*

import dynamic from 'next/dynamic'

const CustomEditor = dynamic(() => import('src/components/EditorJS'), {
  ssr: false,
})
*/
const CreatePostPageView: React.FC = () => {
  const currentUser = useCurrentUser()

  return useMemo(() => {
    /**
     * Если пользователя нет, то ругаемся
     */
    if (!currentUser) {
      return (
        <>
          <h3>Добавить пост могут только авторизованные пользователи.</h3>
        </>
      )
    }

    /**
     * Иначе показываем форму добавления поста
     */
    return (
      <>
        {/* tools={{ simpleImage: SimpleImage }} <ReactEditorJS /><CustomEditor />*/}
        <CreatePostForm />
      </>
    )
  }, [currentUser])
}

export default CreatePostPageView
