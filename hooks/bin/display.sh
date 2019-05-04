#!/bin/bash

display()
{
    echo ""

    case $1 in
        "inspect" )
            echo " ██╗███╗   ██╗███████╗██████╗ ███████╗ ██████╗"
            echo " ██║████╗  ██║██╔════╝██╔══██╗██╔════╝██╔════╝"
            echo " ██║██╔██╗ ██║███████╗██████╔╝█████╗  ██║     "
            echo " ██║██║╚██╗██║╚════██║██╔═══╝ ██╔══╝  ██║     "
            echo " ██║██║ ╚████║███████║██║     ███████╗╚██████╗"
            echo " ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝     ╚══════╝ ╚═════╝"
            ;;
        "tslint" )
            echo " ████████╗███████╗██╗     ██╗███╗   ██╗████████╗"
            echo " ╚══██╔══╝██╔════╝██║     ██║████╗  ██║╚══██╔══╝"
            echo "    ██║   ███████╗██║     ██║██╔██╗ ██║   ██║   "
            echo "    ██║   ╚════██║██║     ██║██║╚██╗██║   ██║   "
            echo "    ██║   ███████║███████╗██║██║ ╚████║   ██║   "
            echo "    ╚═╝   ╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝   ╚═╝   "
            ;;
        "final" )
            echo " ███████╗██╗███╗   ██╗ █████╗ ██╗     "
            echo " ██╔════╝██║████╗  ██║██╔══██╗██║     "
            echo " █████╗  ██║██╔██╗ ██║███████║██║     "
            echo " ██╔══╝  ██║██║╚██╗██║██╔══██║██║     "
            echo " ██║     ██║██║ ╚████║██║  ██║███████╗"
            echo " ╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝"
            ;;
        "success" )
            shift && echo -e " \e[42;30m[DONE]\e[0m \e[1;30m$*\e[0m"
            ;;
        "error" )
            shift && echo -e "\n \e[41;30m[ERROR]\e[0m \e[1;30m$*\e[0m"
            ;;
    esac

    echo ""
}