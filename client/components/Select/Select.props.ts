import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}
