import React from "react";

type ButtonVariant =
  | "primary"      // bg
  | "outline"      // border
  | "danger"
  | "close";

// 1. 버튼 사이즈 정의 (디자인 스펙 기반)
export const buttonSizeMap = {
  landing: { width: 160, height: 48, fontSize: 16, radius: 12}, // 랜딩 페이지

  authWide: { width: 300, height: 48, fontSize: 16, radius: 12 }, // 로그인 / 생성 / 참여

  teamMedium: { width: 186, height: 48, fontSize: 16, radius: 12 }, // 팀 생성 / 참여

  teamAdd: { width: 172, height: 33, fontSize: 14, radius: 8 }, //팀 생성하기

  todoAdd: { width: 112, height: 40, fontSize: 14, radius: 40 }, //팀 추가하기

  todoAction: { width: 132, height: 40, fontSize: 14, radius: 40 }, // 완료 / 취소

  smallAction: { width: 73, height: 33, fontSize: 14, radius: 8 }, // 댓글 수정 등

  todoCreate: { width: 336, height: 48, fontSize: 16, radius: 12 }, //할 일 추가하기

  normal: { width: 136, height: 48, fontSize: 16, radius: 12 }, // 삭제 / 닫기 등

  wide: { width: 280, height: 48, fontSize: 16, radius: 12 }, // 복사 / 목록

  save: { width: 141, height: 33, fontSize: 14, radius: 8 }, // 수정하기

  post: { width: 300, height: 48, fontSize: 16, radius: 12 }, // 게시글 등록 (반응형)
} as const;

export type ButtonSize = keyof typeof buttonSizeMap;

const variantClassMap: Record<ButtonVariant, string> = {
  primary: `
    bg-brand-primary
    text-color-inverse
    hover:bg-interaction-hover
    active:bg-interaction-pressed
  `,

  outline: `
    border
    border-brand-primary
    text-brand-primary
    bg-transparent
    hover:bg-brand-primary/10
  `,

  danger: `
    bg-status-danger
    text-color-inverse
    hover:bg-status-danger/90
  `,

  close: `
    bg-transparent
    border-color-secondary
    text-brand-primary
    hover:bg-surface-tertiary
  `,
};

// 2. Props 최소화
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  fullWidth?: boolean;
  variant?: ButtonVariant;
}

// 3. 공용 버튼 컴포넌트
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = ({
  size = "normal",
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const s = buttonSizeMap[size];

  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        font-lg-m
        transition-colors
        ${variantClassMap[variant]}
        ${className}
      `}
      style={{
        width: s.width,
        height: s.height,
        borderRadius: s.radius,
      }}
    >
      {children}
    </button>
  );
};

/* ================= 사용 예시 =================

<Button size="landing">시작하기</Button>

<Button size="authWide" fullWidth>
  로그인
</Button>

<Button size="todoAdd">+ 할 일</Button>

<Button size="todoAction">완료</Button>

<Button size="post" fullWidth>
  게시글 등록하기
</Button>

================================================ */
