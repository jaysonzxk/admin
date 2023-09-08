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
        title: '渠道名称',
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
              message: '渠道名称'
            }
          ],
          component: {
            placeholder: '渠道名称'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '渠道编码',
        key: 'payCode',
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
              message: '渠道编码'
            }
          ],
          component: {
            placeholder: '渠道编码'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '最小限额',
        key: 'minQuota',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'number',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '最小限额'
            }
          ],
          component: {
            placeholder: '最小限额'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '最大限额',
        key: 'maxQuota',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'number',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '最大限额'
            }
          ],
          component: {
            placeholder: '最大限额'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '渠道key',
        key: 'payKey',
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
              message: '渠道key'
            }
          ],
          component: {
            placeholder: '渠道key'
          },
          itemProps: {
            class: { yxtInput: true }
          }
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
    ].concat(vm.commonEndColumns({
      create_datetime: { showTable: false },
      update_datetime: { showTable: false }
    }))
  }
}
