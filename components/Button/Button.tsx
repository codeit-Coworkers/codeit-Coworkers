import React from "react";
import plusBlue from "../../assets/plus_blue.svg";

type ButtonVariant =
  | "default"
  | "outline_blue"
  | "danger"
  | "close";

/* 버튼 종류 */
export const buttonSizeMap = {
  landing: { width: 160, height: 48, fontSize: "lg-m", radius: 12 }, // 랜딩 페이지

  authWide: { width: 300, height: 48, fontSize: "lg-m", radius: 12 }, // 로그인, 회원가입

  teamMedium: { width: 186, height: 48, fontSize: "lg-m", radius: 12 }, // 팀 생성, 팀 초대

  teamAdd: { width: 172, height: 33, fontSize: "md-m", radius: 8 }, // 팀 생성, 팀 초대

  todoAdd: { width: 112, height: 40, fontSize: "md-m", radius: 40 }, // 할 일 추가

  todoAction: { width: 132, height: 40, fontSize: "md-m", radius: 40 }, // 할 일 수정, 삭제

  smallAction: { width: 73, height: 33, fontSize: "md-m", radius: 8 }, // 할 일 수정, 삭제

  todoCreate: { width: 336, height: 48, fontSize: "lg-m", radius: 12 }, // 할 일 생성

  normal: { width: 136, height: 48, fontSize: "lg-m", radius: 12 }, // 삭제 / 닫기 버튼

  wide: { width: 280, height: 48, fontSize: "lg-m", radius: 12 }, // 목록 버튼

  save: { width: 141, height: 33, fontSize: "md-m", radius: 8 }, // 수정하기 버튼

  post: { width: 300, height: 48, fontSize: "lg-m", radius: 12 }, // 게시글 버튼
} as const;

export type ButtonSize = keyof typeof buttonSizeMap;

/* 버튼 스타일 */
const variantClassMap: Record<ButtonVariant, string> = {
  default: `
    bg-brand-primary
    text-color-inverse
    hover:bg-interaction-hover
    active:bg-interaction-pressed
  `,

  outline_blue: `
    border
    border-brand-primary
    text-brand-primary
    bg-surface-primary
    hover:bg-brand-primary/10
  `,

  danger: `
    bg-status-danger
    text-color-inverse
    hover:bg-status-danger/90
  `,

  close: `
    border
    border-color-secondary
    text-color-default
    bg-surface-primary
    hover:bg-color-secondary
    active:bg-color-tertiary
  `,
};

/* 버튼 속성  다 설정해야 사용 가능*/ 
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: string;
}

export const Button = ({
  size = "normal",
  variant = "default",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const s = buttonSizeMap[size];

  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center gap-2
        font-lg-m
        transition-colors
        ${variantClassMap[variant]}
        ${className}
      `}
      style={{
        width: s.width,
        height: s.height,
        borderRadius: s.radius,
        fontSize: s.fontSize,
      }}
    >
      {icon && <img src={icon} alt="" className="w-4 h-4" />}
      {children}
    </button>
  );
};

// =================== 사용 예시 ===================

{/* 

size : 버튼 사이즈
variant : 버튼 ui 스타일
icon : 버튼 아이콘

// 아이콘 없이 텍스트만
<Button size="landing">
  시작하기
</Button>

// 아이콘 있는 버튼
<Button
  size="teamAdd"
  variant="outline"
  icon={plusBlue}
>
  팀 생성하기
</Button>

// 반응형 사용시 부모 요소에 width를 지정해야함

*/}

//================================================