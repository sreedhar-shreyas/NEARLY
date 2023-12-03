import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
icon: Icon,
label,
selected
}) => {
    const router = useRouter();
    const params = useSearchParams();
    const handleClick = useCallback(()=>{
        let currentQuery = {};
        //Look at current parameters
        if (params){
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            //Spread the curent query params to updated one 
            ...currentQuery,
            category: label
        
        }

            //check if new category is already selected 
        if(params ?.get('categeory') === label) {
            delete updatedQuery.category;

        } 
        //generate url string by passing the pathname by the queryname
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        },  {skipNull: true});

        router.push(url);
    }, [label, params, router]);

    return ( <div
    onClick={handleClick}
    className={`
    flex
    flex-row
    items-center
    justify-center
    gap-2
    p-3
    border-2
    hover:text-neutral-800
    transition
    cursor-pointer
    ${selected ? 'border-b-neutral-800 ': 'border-transparent'}
    ${selected ? 'text-neutral-800 ': 'text-neutral-500'}`}>
        <Icon size={26} />
        <div className="font-medium text-sm">
            {label}
        </div>
    </div> );
}
 
export default CategoryBox;