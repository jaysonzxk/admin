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
        title: '订单编号',
        key: 'oderNo',
        align: 'center',
        search: {
          disabled: false
        },
        width: 300,
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '订单编号'
            }
          ],
          component: {
            placeholder: '订单编号'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '渠道名称',
        key: 'payChannel.name',
        align: 'center',
        search: {
          disabled: false
        },
        width: 200,
        type: 'input',
        form: {
        }
      },
      {
        title: '支付金额',
        key: 'amount',
        align: 'center',
        search: {
          disabled: false
        },
        width: 100,
        type: 'input',
        form: {
        }
      },

      {
        title: '支付状态',
        key: 'orderStatus',
        type: 'select',
        width: 100,
        align: 'center',
        search: {
          disabled: false
        },
        // type: 'radio',
        dict: {
          data: vm.dictionary('pay_order_status')
        },
        form: {
        }
      },
       {
        title: '创建时间',
        key: 'create_datetime',
         align: 'center',
        search: {
          disabled: true
        },
        width: 200,
        type: 'datetime',
        form: {
          value: 0,
          component: {
            span: 12
          }
        }
      },
      {
        title: '更新时间',
        key: 'update_datetime',
        align: 'center',
        search: {
          disabled: true
        },
        width: 200,
        type: 'datetime',
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
