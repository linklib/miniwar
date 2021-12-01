import React, { useCallback, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'

import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import {
  PostCreateInput,
  useCreatePostMutation,
} from 'src/modules/gql/generated'
import TextField from 'src/components/ui/form/TextField'
import Button from 'src/components/ui/Button'
//import Select, { OptionTypeBase } from 'react-select'

import { CreatePostFormStyled } from './styles'
//import { Context } from 'src/pages/_App/Context'
//import FormControl from '@prisma-cms/ui/dist/form/FormControl'

//import { useMashroomsQuery } from 'src/modules/gql/generated'

import Uploader, { UploadResponse } from '@prisma-cms/uploader'

/*interface Option extends OptionTypeBase {
  value: string
  label: string
}
*/

/**
 * Форма добавления поста
 */
const CreatePostForm: React.FC = () => {
  //const context = useContext(Context)
  const router = useRouter()

  //console.log('catalogId', router.query)

  const catalogId =
    typeof router.query.catalogId === 'string'
      ? router.query.catalogId
      : undefined

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<PostCreateInput> = yup
      .object({
        title: yup.string().required(),
        urlname: yup.string().required(),
        description: yup.string(),
        content: yup.string(),
        image: yup.string(),
        catalogId: yup.string(),
        catalogNewId: yup.string(),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control, formState, trigger, setValue } =
    useForm<PostCreateInput>({
      resolver: yupResolver(schema),
      shouldFocusError: true,
      /**
       * Устанавливаем режим ревалидации формы при изменении данных.
       * https://github.com/react-hook-form/react-hook-form/issues/2755#issuecomment-683268595
       */
      mode: 'onChange',
      /*defaultValues: {
        showEmail: false,
        showFullname: true,
      },*/
    })

  /**
   * При загрузке формы сразу вызываем валидацию формы,
   * чтобы показать обязательные поля
   */
  useEffect(() => {
    trigger()
  }, [trigger])

  /**
   * Хук регистрации
   */

  const [creatpostMutation, { loading: createpostLoading }] =
    useCreatePostMutation()

  /**
   * Отправка формы
   */
  const onSubmit = handleSubmit((data) => {
    if (createpostLoading) {
      return
    }

    /**
     * Выполняем запрос на сервер
     */
    creatpostMutation({
      variables: {
        data,
      },
    })
      .then((r) => {
        if (r.data?.createPost) {
          router.push(`/post/${r.data.createPost.title}`)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  /**
   * Рендерер поля
   */
  const titleFieldRender: ControllerProps<PostCreateInput, 'title'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Наименование"
          {...field}
          value={field.value || ''}
          error={formState.errors[field.name]}
        />
      )
    }, [])

  const urlnameFieldRender: ControllerProps<
    PostCreateInput,
    'urlname'
  >['render'] = useCallback(({ field, formState }) => {
    return (
      <TextField
        type="text"
        title="URL статьи на английском"
        {...field}
        value={field.value || ''}
        error={formState.errors[field.name]}
      />
    )
  }, [])

  const descriptionFieldRender: ControllerProps<
    PostCreateInput,
    'description'
  >['render'] = useCallback(({ field, formState }) => {
    return (
      <TextField
        type="text"
        title="Описание поста"
        {...field}
        value={field.value || ''}
        error={formState.errors[field.name]}
      />
    )
  }, [])

  const imageFieldRender: ControllerProps<PostCreateInput, 'image'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Картинка"
          {...field}
          value={field.value || ''}
          error={formState.errors[field.name]}
        />
      )
    }, [])

  setValue('catalogId', catalogId, {
    /**
     * Эти параметры нужны, чтобы форма перевалидировалась
     */
    shouldDirty: true,
    shouldTouch: true,
    shouldValidate: true,
  })

  /**
   * Идея в том, чтобы загрузить картинку на сервер с помощью @prisma-cms/uploarder, добавить строку в таблицу Field, а url загруженной картинки
   * поле image формы. И поле сделать недоступное для редактирования пользователем.
   */

  // const Upload: React.FC<T> = () => {
  const onUpload = useCallback(
    (result: UploadResponse) => {
      //console.log('result', result)

      setValue('image', result.data.singleUpload?.path, {
        /**
         * Эти параметры нужны, чтобы форма перевалидировалась
         */
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
    },
    [setValue]
  )
  /*
    return (
      <>
        <Uploader name="post" onUpload={onUpload} directory="images/" />
      </>
    )*/
  //}

  return useMemo(() => {
    return (
      <>
        <CreatePostFormStyled onSubmit={onSubmit}>
          <h2>
            Добавить пост в категорию
            <br />
            {router.query.catalog}
          </h2>
          <Controller
            name="title"
            control={control}
            render={titleFieldRender}
          />

          <Controller
            name="urlname"
            control={control}
            render={urlnameFieldRender}
          />

          <Controller
            name="description"
            control={control}
            render={descriptionFieldRender}
          />

          <Controller
            name="image"
            control={control}
            render={imageFieldRender}
          />

          <Uploader name="post" onUpload={onUpload} directory="images/" />
          {
            //<Controller name="image" control={control} render={Upload} />
          }

          <Button
            type="submit"
            disabled={createpostLoading || !formState.isValid}
            variant={formState.isValid ? 'success' : 'default'}
          >
            Добавить
          </Button>
        </CreatePostFormStyled>
      </>
    )
  }, [
    control,
    createpostLoading,
    descriptionFieldRender,
    formState.isValid,
    imageFieldRender,
    onSubmit,
    onUpload,
    router.query.catalog,
    titleFieldRender,
    urlnameFieldRender,
  ])
}

export default CreatePostForm
