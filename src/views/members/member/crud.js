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
      custom: [
        {
          thin: true,
          text: '密码重置',
          size: 'small',
          type: 'warning',
          icon: 'el-icon-refresh-left',
          show () {
            return vm.hasPermissions('ResetPassword')
          },
          emit: 'resetPassword'
        }
      ]
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
        title: '账号',
        key: 'username',
        align: 'center',
        search: {
          disabled: false
        },
        minWidth: 100,
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '账号必填项'
            }
          ],
          component: {
            placeholder: '请输入账号'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },
      {
        title: '密码',
        key: 'password',
        align: 'center',
        minWidth: 90,
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '密码必填项'
            }
          ],
          component: {
            span: 12,
            showPassword: true,
            placeholder: '请输入密码'
          },
          value: vm.systemConfig('base.default_password'),
          editDisabled: true,
          itemProps: {
            class: { yxtInput: true }
          }
        },
        disabled: true,
        valueResolve (row, key) {
          if (row.password) {
            row.password = vm.$md5(row.password)
          }
        }
      },
      {
        title: '姓名',
        key: 'name',
        sortable: 'custom',
        align: 'center',
        minWidth: 90,
        search: {
          disabled: false
        },
        type: 'input',
        form: {
          rules: [ // 表单校验规则
            {
              required: true,
              message: '姓名必填项'
            }
          ],
          component: {
            span: 12,
            placeholder: '请输入姓名'
          },
          itemProps: {
            class: { yxtInput: true }
          }
        }
      },

      {
        title: '手机号码',
        key: 'mobile',
        align: 'center',
        search: {
          disabled: false
        },
        minWidth: 110,
        type: 'input',
        form: {
          rules: [
            {
              max: 20,
              message: '请输入正确的手机号码',
              trigger: 'blur'
            },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: '请输入正确的手机号码'
            }
          ],
          itemProps: {
            class: { yxtInput: true }
          },
          component: {
            placeholder: '请输入手机号码'
          }
        }
      }, {
        title: '邮箱',
        key: 'email',
        align: 'center',
        minWidth: 180,
        form: {
          rules: [
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ],
          component: {
            placeholder: '请输入邮箱'
          }
        }
      },
      {
        title: '上级',
        key: 'parent',
        align: 'center',
        minWidth: 180,
        form: {
          disabled: true,
          rules: [
            {
              // type: 'text',
              message: '请绑定邀请码',
              // trigger: ['blur', 'change']
            }
          ],
          component: {
            placeholder: '请绑定邀请码'
          }
        }
      },
      {
        title: '邀请码',
        key: 'inviteCode',
        align: 'center',
        minWidth: 180,
        form: {
          disabled: true,
          rules: [
            {
              // type: 'input',
              message: '请绑定邀请码',
              // trigger: ['blur', 'change']
            }
          ],
          component: {
            placeholder: '请绑定邀请码'
          }
        }
      },
      {
        title: '上级邀请码',
        key: 'parentInviteCode',
        align: 'center',
        minWidth: 180,
        disabled: true,
        form: {
          disabled: true,
          rules: [
            {
              // type: 'text',
              message: '上级邀请码',
              // trigger: ['blur', 'change']
            }
          ],
          component: {
            placeholder: '上级邀请码'
          }
        }
      },
      {
        title: '积分',
        key: 'points',
        align: 'center',
        minWidth: 180,
        // form: {
        //   rules: [
        //     {
        //       type: 'number',
        //       message: '请绑定邀请码',
        //       // trigger: ['blur', 'change']
        //     }
        //   ],
        //   component: {
        //     placeholder: '请绑定邀请码'
        //   }
        // }
      },
      {
        title: '性别',
        key: 'gender',
        type: 'radio',
        align: 'center',
        width: 70,
        dict: {
          data: vm.dictionary('gender')
        },
        form: {
          value: 1,
          component: {
            span: 12
          }
        },
        component: { props: { color: 'auto' } } // 自动染色
      }, {
        title: '用户类型',
        key: 'user_type',
        align: 'center',
        search: {
          disabled: false
        },
        width: 145,
        type: 'select',
        dict: {
          data: vm.dictionary('user_type')
        },
        form: {
          show: false,
          value: 0,
          component: {
            span: 12
          }
        }
      }, {
        title: '状态',
        key: 'is_active',
        align: 'center',
        search: {
          disabled: false
        },
        width: 70,
        type: 'radio',
        dict: {
          data: vm.dictionary('button_status_bool')
        },
        form: {
          value: true,
          component: {
            span: 12
          }
        }
      },
      {
        title: '头像',

        key: 'avatar',
        type: 'avatar-cropper',
        width: 60,
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
      }
    ].concat(vm.commonEndColumns({
      create_datetime: { showTable: false },
      update_datetime: { showTable: false }
    }))
  }
}
