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
        title: '用户名称',
        key: 'username',
        align: 'center',
        width: 200,
        search: {
          disabled: false
        },
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '用户名称'
            }
          ],
          component: {
            placeholder: '用户名称'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: 'VIP名称',
        key: 'vipCard',
        align: 'center',
        width: 200,
        search: {
          disabled: true
        },
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '折扣'
            }
          ],
          component: {
            span: 12,
            placeholder: '折扣'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '到期时间',
        key: 'expiration',
        align: 'center',
        width: 200,
        search: {
          disabled: false
        },
        type: 'datetime',
        form: {
          value: 1,
          component: {
            span: 12
          }
        }
      },
      {
        title: '开通日期',
        key: 'create_datetime',
        align: 'center',
        width: 200,
        search: {
          disabled: false
        },
        type: 'datetime',
        form: {
          value: 1,
          component: {
            span: 12,
          }
        }
      },
      {
        title: '更新时间',
        key: 'update_datetime',
        align: 'center',
        width: 200,
        search: {
          disabled: false
        },
        type: 'datetime',
        form: {
          value: 1,
          component: {
            span: 12
          }
        }
      },
      {
        title: '是否到期',
        key: 'isExpired',
        align: 'center',
        search: {
          disabled: false
        },
        width: 170,
        type: 'radio',
        dict: {
          data: vm.dictionary('is_expired')
        },
        form: {
          component: {
            span: 12,
            placeholder: '到期时间'
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
        width: 170,
        type: 'radio',
        dict: {
          data: vm.dictionary('button_status_number')
        },
        form: {
          component: {
            span: 12,
            placeholder: '到期时间'
          }
        }
      },
    ].concat(vm.commonEndColumns({
      create_datetime: { showTable: false },
      update_datetime: { showTable: false }
    }))
  }
}
