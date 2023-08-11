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
        width: 120,
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
        title: '服务项目',
        key: 'project.name',
        align: 'center',
        search: {
          disabled: false
        },
        width: 120,
        type: 'input',
        form: {
        }
      },
      {
        title: '技师姓名',
        key: 'master.name',
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
        title: '原价',
        key: 'project.originPrice',
        align: 'center',
        search: {
          disabled: true
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
        title: '实付金额',
        key: 'amount',
        align: 'center',
        search: {
          disabled: true
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
        title: '服务对象',
        key: 'user.name',
        type: 'input',
        width: 100,
        align: 'center',
        search: {
          disabled: true
        },
        form: {
        }
      },
      {
        title: '服务地址',
        key: 'addr.addr',
        type: 'input',
        width: 200,
        align: 'center',
        search: {
          disabled: true
        },
        form: {
        }
      },
      {
        title: '联系电话',
        key: 'user.mobile',
        type: 'input',
        width: 100,
        align: 'center',
        search: {
          disabled: true
        },
        form: {
        }
      },
      {
        title: '服务状态',
        key: 'orderStatus',
        type: 'select',
        width: 100,
        align: 'center',
        search: {
          disabled: false
        },
        // type: 'radio',
        dict: {
          data: vm.dictionary('order_status')
        },
        form: {
        }
      },
      //  {
      //   title: '状态',
      //   key: 'status',
      //    align: 'center',
      //   search: {
      //     disabled: false
      //   },
      //   width: 70,
      //   type: 'radio',
      //   dict: {
      //     data: vm.dictionary('button_status_number')
      //   },
      //   form: {
      //     value: 0,
      //     component: {
      //       span: 12
      //     }
      //   }
      // },
    ].concat(vm.commonEndColumns({
      create_datetime: { showTable: false },
      update_datetime: { showTable: false }
    }))
  }
}
