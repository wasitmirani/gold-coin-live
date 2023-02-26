<?php

namespace App\helpers;

class HelperComponent
{


    public static function SideBar()
    {
        $prefix = "portal";
        return [
            [
                "heading" => "Analytics",
                "heading_can" => "analytics-heading-view",
            ],

            [

                "title" => 'Dashboard',
                'can' => 'dashboard-dropdown',
                "icon" => "ti-smart-home",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Overview",
                        null,
                        "dashboard-overview-view",
                        "/dashboard/overview",
                    ),
                ],
            ],

            [
                "heading" => "Management",
                "heading_can" => "management-heading-view",

            ],
            [

                "title" => 'User Management',
                'can' => 'user-management-dropdown',
                "icon" => "ti-users",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Users",
                        null,
                        "users-list-view",
                        "/users",
                    ),
                    // setSubMenu(
                    //     "Clients",
                    //     null,
                    //     "clients-list-view",
                    //     "/clients",
                    // ),
                    setSubMenu(
                        "Roles",
                        null,
                        "roles-list-view",
                        "/roles",
                    ),
                    setSubMenu(
                        "Permissions",
                        null,
                        "permissions-list-view",
                        "/permissions",
                    ),

                ]

            ],
            [
                "heading" => "Apps & Payments",
                "heading_can" => "apps-heading-view",
            ],
            [
                "title" => 'Hospitals Management',
                'can' => 'hospitals-dropdown',
                "icon" => "ti-building-hospital",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Hospitals List",
                        null,
                        "hospitals-view",
                        "/hospitals"
                    ),
                ]

            ],
            [
                "title" => 'Digital Wallet',
                'can' => 'wallet-dropdown',
                "icon" => "ti-wallet",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "My Wallet",
                        null,
                        "my-wallet-view",
                        "/my-wallet"
                    ),
                    setSubMenu(
                        "Wallet History",
                        null,
                        "wallet-history",
                        "/wallet-history",
                    ),
                ]

            ],
            [
                "title" => 'Payment Cards',
                'can' => 'payment-cards-dropdown',
                "icon" => "ti-credit-card",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "My Cards",
                        null,
                        "my-cards-view",
                        "/my-cards"
                    ),
                    // setSubMenu(
                    //     "Wallet History",
                    //     null,
                    //     "wallet-history",
                    //     "/wallet-history",
                    // ),
                ]

            ],

            [
                "heading" => "Reports & invoices",
                "heading_can" => "reports-heading-view",
            ],
            setSingleLink("My Invoices","ti-file-invoice","my-invoices",'/my-invoices'),
            [
                "title" => 'Invoices',
                'can' => 'invoices-dropdown',
                "icon" => "ti-file-invoice",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "invoices",
                        null,
                        "invoices-view",
                        "/invoices"
                    ),
                    setSubMenu(
                        "Create invoice",
                        null,
                        "create-invoice",
                        "/create-invoice?create=true",
                    ),
                ]

            ],

            [
                "title" => 'transaction',
                'can' => 'transactions-dropdown',
                "icon" => "ti-cash-banknote",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "My Transactions",
                        null,
                        "my-transactions-view",
                        "/my-transactions"
                    ),
                    setSubMenu(
                        "Transactions",
                        null,
                        "transactions-view",
                        "/transactions",
                    ),
                ]

            ],
            [
                "heading" => "Tools",
                "heading_can" => "tools-heading-view",
            ],

            [
                "title" => 'Integrations',
                'can' => 'integrations-dropdown',
                "icon" => "ti-affiliate",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Paypal",
                        null,
                        "paypal-view",
                        "/paypal-integration"
                    ),
                    setSubMenu(
                        "Stripe",
                        null,
                        "stripe-integration",
                        "/stripe-integration",
                    ),
                ]

            ],
            [
                "title" => 'Settings',
                'can' => 'setting-dropdown',
                "icon" => "ti-settings",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Profile",
                        null,
                        "profile-view",
                        "/settings",
                    ),
                    setSubMenu(
                        "Change Password",
                        null,
                        "changepassword-view",
                        "/settings/change-password",
                    ),
                ]

            ],
        ];
    }
}
