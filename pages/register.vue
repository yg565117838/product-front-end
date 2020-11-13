<template>
    <el-form ref="form" :model="form" label-width="80px" class="form" :rules="rules" :hide-required-asterisk="true">
        <el-form-item>
            <div class="form-title">用户注册</div>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" type="text" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
            <el-input v-model="form.checkPassword" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">注册</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="$router.push('/login')">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "register",
        layout: "loginRegister",
        data() {
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.form.checkPassword !== '') {
                        this.$refs.form.validateField('checkPassword');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    name: '',
                    password: '',
                    checkPassword:''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {validator:validatePass,trigger: 'blur'}
                    ],
                    checkPassword: [
                        {validator:validatePass2,trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .form {
        padding: 30px;

        .form-title {
            color: #fff;
            font-size: 24px;
            text-align: center;
        }

        /deep/ .el-form-item__label {
            color: #fff;
        }

        .el-button {
            width: 100%;
        }
    }
</style>
