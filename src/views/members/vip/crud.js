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
        title: '关键词',
        key: 'search',
        show: false,
        disabled: true,
        search: {
          disabled: false
        },
        form: {
          disabled: true,
          component: {
            placeholder: '请输入关键词'
          }
        },
        view: {
          disabled: true
        }
      },
      {
        title: 'ID',
        key: 'id',
        disabled: true,
        form: {
          disabled: true
        }
      },
      {
        title: '商品名称',
        key: 'name',
        search: {
          disabled: false
        },
        minWidth: 100,
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '商品名称必填'
            }
          ],
          component: {
            placeholder: '商品名称'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '折扣',
        key: 'discount',
        // sortable: 'custom',
        // minWidth: 90,
        search: {
          disabled: false
        },
        type: 'number',
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
        title: '金额',
        key: 'amount',
        search: {
          disabled: false
        },
        minWidth: 110,
        type: 'input',
        form: {
          rules: [
            {
              max: 20,
              message: '金额',
              trigger: 'blur'
            },
            // {
            //   pattern: /^1[3-9]\d{9}$/,
            //   message: '请输入正确的手机号码'
            // }
          ],
          itemProps: {
            class: { yxtInput: true }
          },
          component: {
            placeholder: '金额'
          }
        }
      },
      {
        title: '排序',
        key: 'sort',
        search: {
          disabled: false
        },
        minWidth: 110,
        type: 'input',
        form: {
          rules: [
            {
              max: 20,
              message: '排序',
              trigger: 'blur'
            },
          ],
          component: {
            span: 12,
            placeholder: '排序'
          }
        }
      },
      {
        title: '推荐',
        key: 'isRecommend',
        // sortable: 'custom',
        // minWidth: 90,
        search: {
          disabled: false
        },
        type: 'radio',
        dict: {
          data: vm.dictionary('is_recommend')
        },
        form: {
          value: 0,
          component: {
            span: 12
          }
        }
      },
       {
        title: '状态',
        key: 'status',
        search: {
          disabled: false
        },
        width: 70,
        type: 'radio',
        dict: {
          data: vm.dictionary('button_status_number')
        },
        form: {
          value: 1,
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
