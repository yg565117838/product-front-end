<template>
    <el-form ref="form" :model="form" label-width="80px" class="form" :rules="rules" :hide-required-asterisk="true">
        <el-form-item>
            <div class="form-title">用户登录</div>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" type="text" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">登录</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="$router.push('/register')">注册</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "login",
        layout: "loginRegister",
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
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
            },
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
