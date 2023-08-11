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
      // view: {
      //   thin: true,
      //   text: '',
      //   disabled () {
      //     return !vm.hasPermissions('Retrieve')
      //   }
      // },
      view: false,
      edit: {
        thin: true,
        text: '审核',
        disabled () {
          return !vm.hasPermissions('Update')
        }
      },
      remove: {
        thin: true,
        text: '删除',
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
        title: '申请用户',
        key: 'mobile',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'input',
        form: {
          disabled: true,
          rules: [ // 表单校验规则
            {
              required: true,
              message: '申请用户'
            }
          ],
          component: {
            placeholder: '申请用户'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '姓名',
        key: 'name',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'input',
        form: {
          disabled: true,
          rules: [ // 表单校验规则
            {
              required: true,
              message: '姓名'
            }
          ],
          component: {
            placeholder: '姓名'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '性别',
        key: 'gender',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'radio',
        dict: {
          data: vm.dictionary('gender')
        },
        form: {
          disabled: true,
          value: 2,
          component: {
            span: 12
          }
        }
      },
      {
        title: '年龄',
        key: 'age',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'input',
        form: {
          disabled: true,
          rules: [ // 表单校验规则
            {
              required: true,
              message: '年龄'
            }
          ],
          component: {
            placeholder: '年龄'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '入住城市',
        key: 'city',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'input',
        form: {
          disabled: true,
          rules: [ // 表单校验规则
            {
              required: true,
              message: '入住城市'
            }
          ],
          component: {
            placeholder: '入住城市'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '审核状态',
        key: 'reviewStatus',
        align: 'center',
        search: {
          disabled: false
        },
        width: 170,
        type: 'select',
        dict: {
          data: vm.dictionary('review_status')
        },
        form: {
          value: 0,
          component: {
            span: 12
          }
        }
      },
      {
        title: '失败原因',
        key: 'failureReason',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'input',
        form: {
          disabled: true,
          rules: [ // 表单校验规则
            {
              required: true,
              message: '入住城市'
            }
          ],
          component: {
            placeholder: '入住城市'
          },
          itemProps: {
            class: { yxtInput: true }
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
          disabled: true,
          value: 0,
          component: {
            span: 12
          }
        }
      },
    ].concat(vm.commonEndColumns({
      create_datetime: { showTable: true },
      update_datetime: { showTable: false }
    }))
  }
}
