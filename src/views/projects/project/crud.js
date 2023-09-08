import { request } from '@/api/service'

export const crudOptions = (vm) => {
  // util.filterParams(vm, ['dept_name', 'role_info{name}', 'dept_name_all'])
  return {
    pageOptions: {
      compact: true
    },
    options: {
      height: '100%',
      // tableType: 'vxe-table',
      // rowKey: true,
      rowId: 'id'
    },
    selectionRow: {
      align: 'center',
      width: 46
    },
    rowHandle: {
      width: 240,
      fixed: 'right',
      view: {
        thin: true,
        text: '',
        disabled () {
          return !vm.hasPermissions('Retrieve')
        }
      },
      edit: {
        thin: true,
        text: '',
        disabled () {
          return !vm.hasPermissions('Update')
        }
      },
      remove: {
        thin: true,
        text: '',
        disabled () {
          return !vm.hasPermissions('Delete')
        }
      },
    },
    viewOptions: {
      componentType: 'form'
    },
    formOptions: {
      defaultSpan: 12 // 默认的表单 span
    },
    indexRow: { // 或者直接传true,不显示title，不居中
      title: '序号',
      align: 'center',
      width: 60
    },
    columns: [
      {
        title: 'ID',
        key: 'id',
        disabled: true,
        form: {
          disabled: true
        }
      },
      {
        title: '项目名称',
        key: 'name',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '项目名称'
            }
          ],
          component: {
            placeholder: '项目名称'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '服务时长(分钟)',
        key: 'duration',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '服务时长'
            }
          ],
          component: {
            placeholder: '服务时长'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '现价',
        key: 'price',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '现价'
            }
          ],
          component: {
            placeholder: '现价'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '原价',
        key: 'originPrice',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '原价'
            }
          ],
          component: {
            placeholder: '原价'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '预览图片',
        key: 'img',
        type: 'image-uploader',
        width: 200,
        align: 'center',
        form: {
          component: {
            props: {
              elProps: { // 与el-uploader 配置一致
                multiple: false,
                limit: 1 // 限制5个文件
              },
              sizeLimit: 500 * 1024 // 不能超过限制
            },
            span: 24
          },
          helper: '限制文件大小不能超过500k'
        }
      },
      {
        title: '排序',
        key: 'sort',
        align: 'center',
        search: {
          disabled: true
        },
        width: 70,
        type: 'input',
        form: {
          // rules: [
          //   {
          //     max: 20,
          //     message: '排序',
          //     trigger: 'blur'
          //   },
          // ],
          component: {
            span: 12,
            placeholder: '排序'
          }
        }
      },
       {
        title: '状态',
        key: 'status',
         align: 'center',
        search: {
          disabled: false
        },
        width: 70,
        type: 'radio',
        dict: {
          data: vm.dictionary('button_status_number')
        },
        form: {
          value: 0,
          component: {
            span: 12
          }
        }
      },
      {
        title: '禁忌说明',
        key: 'prohibition',
        width: 400,
        align: 'center',
        search: {
          disabled: true
        },
        type: 'textarea',
        form: {
          component: {
            placeholder: '请输入内容',
            showWordLimit: true,
            maxlength: '1000',
            props: {
              type: 'textarea'
            }
          }
        }
      },
      {
        title: '下单说明',
        key: 'orderInstructions',
        width: 400,
        align: 'center',
        search: {
          disabled: true
        },
        type: 'textarea',
        form: {
          component: {
            placeholder: '请输入内容',
            showWordLimit: true,
            maxlength: '1000',
            props: {
              type: 'textarea'
            }
          }
        }
      },
    ].concat(vm.commonEndColumns({
      create_datetime: { showTable: false },
      update_datetime: { showTable: false }
    }))
  }
}
