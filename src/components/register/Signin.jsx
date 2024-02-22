import { Box, Button, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("잘 못된 이메일 형식입니다").required("이메일 입력 필요"),
    password: Yup.string().min(8, "비밀번호 최소 8자 이상 입력 필요").required("비밀번호 입력 필요"),
});

export default function Signin() {
    
    const initialValues = {
        email: "",
        password: "",
    };

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log("values: ", values);
    };

    const hanleNavigate = () => {
        navigate("/signup");
    };
    
    return (
        <div>
            <div className="border">
                <Box 
                    p={8} 
                    display={'flex'} 
                    flexDirection={'column'} 
                    alignItems={'center'}
                >
                    <img src="https://i.imgur.com/zqpwkLQ.png" alt="" />
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formikProps) => (
                            <Form className="space-y-4 py-8 w-full">
                                {/* 이메일 입력칸 */}
                                <Field name="email">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                                            <Input 
                                                {...field}
                                                id="email"
                                                placeholder="전화번호 또는 이메일"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.email}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                {/* 비밀번호 입력칸 */}
                                <Field name="password">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                                            <Input 
                                                {...field}
                                                id="password"
                                                placeholder="비밀번호"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.password}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Button 
                                    className="w-full" 
                                    mt={4} 
                                    colorScheme="blue" 
                                    type="submit" 
                                    isLoading={formikProps.isSubmitting}
                                >
                                    로그인
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </div>
            <div className="border w-full border-slate-300 mt-5">
                <p className="text-center py-2">계정이 없으신가요? 
                    <span 
                        onClick={hanleNavigate}
                        className="cursor-pointer ml-2"
                    >
                        가입하기
                    </span>
                </p>
            </div>
        </div>
    )
}