import { AxiosResponse } from 'axios';

interface Response {
    status: string;
    body?: unknown;
    headers?: Record<string, unknown>;
}

declare type Method = 'get' | 'post' | 'put' | 'delete' | 'options';
declare type RequestResponse<ResponseData extends Response, RequestData extends Record<string, any> | false = false> = RequestData extends false ? (data?: any) => Promise<AxiosResponse<ResponseData>> : (data: RequestData) => Promise<AxiosResponse<ResponseData>>;
declare type URL<Methods extends {
    [Key in Method]?: RequestResponse<any, any>;
}> = Methods;

interface Game_Server {
    '/services/{id}/gameservers': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    gameserver: {
                        must_be_started: boolean;
                        status: string;
                        websocket_token: string;
                        hostsystems: Record<'linux' | 'windows', Record<string, unknown>>;
                        username: string;
                        managed_root: boolean;
                        user_id: number;
                        service_id: number;
                        location_id: number;
                        minecraft_mode: boolean;
                        ip: string;
                        ipv6: string;
                        port: number;
                        query_port: number;
                        rcon_port: number;
                        label: string;
                        type: string;
                        memory: string;
                        memory_mb: number;
                        game: string;
                        game_human: string;
                        game_specific: Record<string, unknown>;
                        modpacks: Record<string, unknown>;
                        slots: number;
                        location: string;
                        credentials: Record<string, {
                            hostname: string;
                            port: number;
                            username: string;
                            password: string;
                        }>;
                        settings: Record<string, unknown>;
                        quota: Record<string, unknown>;
                        query: Record<string, unknown>;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/gameservers/restart': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Server will be restarted now.';
            };
        }, {
            message?: string;
            restart_message?: string;
        }>;
    }>;
    '/services/{id}/gameservers/stop': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Server will be stopped now.';
            };
        }, {
            message?: string;
            stop_message?: string;
        }>;
    }>;
    '/services/{id}/gameservers/backups': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    backups: {
                        gameserver: Record<string, Array<{
                            backup_type: string;
                            backup_timestamp: number;
                            backup_number: number;
                            backup_size: number;
                            backup_file_size: number;
                        }>>;
                        database: Record<string, Array<{
                            backup_file: string;
                            backup_size: number;
                            backup_timestamp: number;
                        }>>;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/gameservers/app_server/command': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Command successful send to the application server';
            };
        }, {
            command: string;
        }>;
    }>;
    '/services/{id}/gameservers/app_server': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Application server pinged';
            };
        }, {
            command: string;
        }>;
    }>;
    '/services/{id}/gameservers/backups/database': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: 'Database backup will be restored.';
            };
        }, {
            database: string;
            timestamp: string;
        }>;
    }>;
    '/services/{id}/gameservers/backups/gameserver': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: 'Game server backup will be restored.';
            };
        }, {
            folder: string;
            backup: string;
        }>;
    }>;
    '/services/{id}/gameservers/ftp/password': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The ftp password has been changed';
            };
        }, {
            password: string;
        }>;
    }>;
    '/services/{id}/gameservers/file_server/bookmarks': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    bookmarks: Array<string>;
                };
            };
        }>;
    }>;
    '/services/{id}/gameservers/file_server/copy': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'File or directory has been copied';
            };
        }, {
            source_path: string;
            target_path: string;
            target_name: string;
        }>;
    }>;
    '/services/{id}/gameservers/file_server/mkdir': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The directory has created';
            };
        }, {
            path: string;
            name: string;
        }>;
    }>;
    '/services/{id}/gameservers/file_server/delete': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'File or directory has been deleted';
            };
        }, {
            path: string;
        }>;
    }>;
    '/services/{id}/gameservers/file_server/download': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        url: string;
                        token: string;
                    };
                };
            };
        }, {
            file: string;
        }>;
    }>;
    '/services/{id}/gameservers/file_server/list': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    entries: Array<{
                        type: string;
                        path: string;
                        name: string;
                        size: number;
                        owner: string;
                        group: string;
                        chmod: string;
                        created_at: number;
                        modified_at: number;
                        accessed_at?: number;
                    }>;
                };
            };
        }, {
            dir?: string;
            search?: string;
        }>;
    }>;
    '/services/{id}/gameservers/file_server/move': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The directory has been moved';
            };
        }, {
            source_path: string;
            target_path: string;
            target_filename?: string;
        }>;
    }>;
    '/services/{id}/gameservers/file_server/seek': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        url: string;
                        token: string;
                    };
                };
            };
        }, {
            file: string;
            offset: number;
            length: number;
            mode?: 'raw' | 'lines';
        }>;
    }>;
    '/services/{id}/gameservers/file_server/size': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    size: number;
                };
            };
        }, {
            path: string;
        }>;
    }>;
    '/services/{id}/gameservers/file_server/stat': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    entries: Array<{
                        type: string;
                        path: string;
                        name: string;
                        size: number;
                        owner: string;
                        group: string;
                        chmod: string;
                        created_at: number;
                        modified_at: number;
                        accessed_at: number;
                    }>;
                };
            };
        }, {
            files: Array<string>;
        }>;
    }>;
    '/services/{id}/gameservers/file_server/upload': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        url: string;
                        token: string;
                    };
                };
            };
        }, {
            path: string;
            file: string;
        }>;
    }>;
    '/gameserver/games': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    games: {
                        steam_id?: string;
                        locations: Array<{
                            id: number;
                            country: string;
                            city: string;
                        }>;
                        games: Array<{
                            id: string;
                            steam_id: number;
                            has_steam_game: string;
                            name: string;
                            minecraft_mode: boolean;
                            publicserver_only: boolean;
                            portlist_short: string;
                            folder_short: string;
                            minimum_slots: number;
                            slot_multiplier: unknown;
                            maximum_recommended_slots: number;
                            modpacks: Array<{
                                id?: number;
                                name?: string;
                                modpack_version?: string;
                                modpack_file?: string;
                                visible?: boolean;
                                game_version?: string;
                            }>;
                            icons: {
                                x256: string;
                                x120: string;
                                x64: string;
                                x32: string;
                                x16: string;
                            };
                            tags: Array<unknown>;
                            preorder_locations: Array<unknown>;
                            locations: Array<number>;
                        }>;
                    };
                };
            };
        }>;
    }>;
}

interface Domain {
    '/domain/contact': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    contact: {
                        handle: string;
                    };
                };
            };
        }, {
            contact: {
                organization?: string;
                first_name: string;
                last_name: string;
                email: string;
                phone: string;
                fax?: string;
                street: string;
                postcode: string;
                city: string;
                state: string;
                country: string;
            };
        }>;
    }>;
    '/domain/{domain}/service': URL<{
        put: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Added domain to service.';
            };
        }, {
            service_id: number;
        }>;
    }>;
    '/domain/{domain}/zone': URL<{
        put: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Enabled successfully';
            };
        }, {
            dnssec: string;
        }>;
    }>;
    '/domain/{domain}/handle/{handle}': URL<{
        put: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
    '/domain/{domain}/nameserver': URL<{
        put: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Your specified nameserver has been set.';
            };
        }, {
            nameserver1?: string;
            nameserver2?: string;
            nameserver3?: string;
            nameserver4?: string;
        }>;
    }>;
    '/domain/{domain}/check': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    check: {
                        domain: string;
                        free: boolean;
                        internal_transfer: boolean;
                    };
                };
            };
        }>;
    }>;
    '/domain/{domain}/auth_code': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    auth_code: {
                        code: unknown;
                        status: string;
                    };
                };
            };
        }>;
    }>;
    '/domain/contact/{handle}': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The contact handle has been deleted successful.';
            };
        }>;
    }>;
    '/domain/{domain}/records': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Deleted successfully';
            };
        }, {
            name: string;
            type: string;
            content?: string;
        }>;
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    status: 'success';
                    message: Array<{
                        type: string;
                        content: string;
                        name: string;
                        mode: string;
                    }>;
                };
            };
        }>;
    }>;
    '/domain/{domain}/redirects': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Deleted successfully';
            };
        }, {
            id: string;
        }>;
    }>;
    '/domain/{domain}/info': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    info: {
                        domain: string;
                        created_at: string;
                        modified_at: string;
                        expires_at: string;
                        status: string;
                        transfer_lock: boolean;
                        auth_code: unknown;
                        auto_renew: string;
                        delegation: boolean;
                        owner_c: string;
                        admin_c: string;
                        tech_c: string;
                        bill_c: string;
                        ns1: string;
                        ns2: string | null;
                        ns3: string | null;
                        ns4: string | null;
                    };
                };
            };
        }>;
    }>;
    '/domain/{domain}/extend': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Domain has been extended.';
            };
        }>;
    }>;
    '/domain/pricing/{domain}/extend': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    extension: {
                        tld: string;
                        currency: string;
                        duration: number;
                        price: number;
                    };
                };
            };
        }>;
    }>;
}

interface Cloud_Server_Apps {
    '/services/{id}/cloud_servers/apps': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    apps: Array<{
                        app_name: string;
                        app_type: string;
                        description: string;
                        status: string;
                        systemd_path: string;
                        systemd_config: string;
                        systemd_modified: boolean;
                        cmd: string;
                        default_cmd: string;
                        parsed_cmd: string;
                        parameters: Record<string, string>;
                        configurations: Record<string, string>;
                    }>;
                };
            };
        }>;
        post: RequestResponse<{
            status: '200';
            body: never;
        }, {
            app_type: string;
            app_name: string;
            ports?: unknown;
        }>;
    }>;
    '/services/{id}/cloud_servers/apps/{app_name}': URL<{
        put: RequestResponse<{
            status: '200';
            body: never;
        }, {
            cmd: string;
            parameters: unknown;
        }>;
        delete: RequestResponse<{
            status: '200';
            body: never;
        }>;
    }>;
    '/services/{id}/cloud_servers/apps/{app_name}/restart': URL<{
        post: RequestResponse<{
            status: '200';
            body: never;
        }>;
    }>;
    '/services/{id}/cloud_servers/apps/{app_name}/stop': URL<{
        post: RequestResponse<{
            status: '200';
            body: never;
        }>;
    }>;
    '/services/{id}/cloud_servers/apps/available': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    apps: Array<{
                        app_type: string;
                        category: string;
                        description: string;
                        minimum_requirements: Record<string, number>;
                        supports_ip_binding: boolean;
                        ports: Array<{
                            name: string;
                            description: string;
                            recommended: number;
                        }>;
                    }>;
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/apps/{app_name}/update': URL<{
        get: RequestResponse<{
            status: '200';
            body: never;
        }>;
    }>;
}

interface Cloud_Server {
    '/services/{id}/cloud_servers': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    cloud_server: {
                        status: string;
                        hostname: string;
                        dynamic: boolean;
                        hardware: {
                            cpu: number;
                            ram: number;
                            windows: number;
                            ssd: number;
                            ipv4: number;
                            traffic: number;
                            backup: number;
                        };
                        ips: Array<{
                            address: string;
                            version: number;
                            main_ip: boolean;
                            mac: string;
                            ptr: string;
                        }>;
                        image: {
                            id: number;
                            name: string;
                            daemon: boolean;
                        };
                        daemon_available: boolean;
                        password_available: boolean;
                        bandwidth_limited: boolean;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/backups': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    backups: Array<{
                        id: string;
                        name: string;
                        created_at: string;
                        type: string;
                        set_id: string;
                        status: string;
                    }>;
                };
            };
        }>;
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'A new Backup will be created now, this can take some minutes.';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/backups/{backup_id}/restore': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Backup will be restored now, this can take some minutes.';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/backups/{backup_id}': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Backup will be deleted now, this can take some minutes.';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/firewall/add': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'A new firewall rule has been added.';
            };
        }, {
            source_ip: string;
            target_ip: string;
            target_port: number;
            protocol: string;
            comment: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/changefeed': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        url: string;
                        token: string;
                    };
                };
            };
        }, {
            unit?: string;
            initial_state?: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/daemon_reload': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Service failure states successfully reset';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/disable': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    changes: Array<Array<string>>;
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/enable': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    changes: Array<Array<string>>;
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    unit: {
                        object_path: string;
                        unit_state: string;
                        description: string;
                        job_id: number;
                        load_state: string;
                        filename: string;
                        job_type: string;
                        job_object_path: string;
                        name: string;
                        active_state: string;
                        sub_state: string;
                        leader: string;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/kill': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Signal has been successfully sent';
            };
        }, {
            who?: string;
            signal?: number;
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    units: Array<{
                        object_path: string;
                        unit_state: string;
                        description: string;
                        job_id: number;
                        load_state: string;
                        filename: string;
                        job_type: string;
                        job_object_path: string;
                        name: string;
                        active_state: string;
                        sub_state: string;
                        leader: string;
                    }>;
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/mask': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    changes: Array<Array<string>>;
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/reload': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    job: number;
                };
            };
        }, {
            replace?: boolean;
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/reset_all_failed': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Service failure states successfully reset';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/reset_failed': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Service failure state successfully reset';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/restart': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    job: number;
                };
            };
        }, {
            replace?: boolean;
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/start': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    job: number;
                };
            };
        }, {
            replace?: boolean;
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/stop': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    job: number;
                };
            };
        }, {
            replace?: boolean;
        }>;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/unmask': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    changes: Array<Array<string>>;
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/rescue': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Cloud Server is rebooting to rescue mode now...';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/boot': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Cloud Server is rebooting now ...';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/hostname': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }, {
            hostname?: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/ptr/{ip_address}': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }, {
            hostname: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/bookmarks': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    bookmarks: Array<string>;
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/chmod': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'File or directory has been chmoded.';
            };
        }, {
            recursive: boolean;
            path: string;
            username?: string;
            group?: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/copy': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'File or directory has been copied';
            };
        }, {
            source_path: string;
            target_path: string;
            target_name: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/mkdir': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The directory has created';
            };
        }, {
            path: string;
            name: string;
            username: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/delete': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'File or directory has been deleted';
            };
        }, {
            path: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/download': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        url: string;
                        token: string;
                    };
                };
            };
        }, {
            file: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/list': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    entries: Array<{
                        name: string;
                        group: string;
                        size: number;
                        created_at: number;
                        type: string;
                        modified_at: number;
                        path: string;
                        owner: string;
                        chmod: string;
                        accessed_at: number;
                    }>;
                };
            };
        }, {
            dir?: string;
            search?: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/move': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The directory has been moved';
            };
        }, {
            source_path: string;
            target_path: string;
            target_filename?: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/size': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    size: number;
                };
            };
        }, {
            path: string;
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/stat': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    entries: Record<string, {
                        name: string;
                        group: string;
                        size: number;
                        created_at: number;
                        type: string;
                        modified_at: number;
                        path: string;
                        owner: string;
                        chmod: string;
                        accessed_at: number;
                    }>;
                };
            };
        }, {
            files: Array<string>;
        }>;
    }>;
    '/services/{id}/cloud_servers/file_server/upload': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        url: string;
                        token: string;
                    };
                };
            };
        }, {
            path: string;
            file: string;
        }>;
    }>;
    '/cloud_servers/images': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    images: Array<{
                        id: number;
                        name: string;
                        is_windows: boolean;
                        default: boolean;
                        has_daemon: boolean;
                        is_daemon_compatible: boolean;
                    }>;
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/unrescue': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Cloud Server is leaving the rescue mode now...';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/ping': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Cloud Server is leaving the rescue mode now...';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/reinstall': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Re-installation has been started.';
            };
        }, {
            image_id?: number;
        }>;
    }>;
    '/services/{id}/cloud_servers/system/journal': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        url: string;
                        token: string;
                    };
                };
            };
        }, {
            unit?: string;
            cursor?: string;
            backlog?: number;
            count?: number;
        }>;
    }>;
    '/services/{id}/cloud_servers/reboot': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Cloud Server is rebooting now ...';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/hard_reset': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Cloud Server is rebooting now ...';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/resources': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    resources: Array<{
                        type: string;
                        datapoints: Record<string, number>;
                    }>;
                };
            };
        }, {
            time?: number;
        }>;
    }>;
    '/services/{id}/cloud_servers/console_logs': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    console_logs: string;
                };
            };
        }, {
            lines?: number;
        }>;
    }>;
    '/services/{id}/cloud_servers/console': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    console: {
                        url: string;
                        type: string;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/password': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    password: string;
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/shutdown': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Cloud Server is shutting down now ...';
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/traffic': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    traffic: {
                        current_month: {
                            used: number;
                            available: number;
                        };
                        last_30_days: Record<string, {
                            incoming: number;
                            outgoing: number;
                        }>;
                    };
                };
            };
        }>;
    }>;
}

interface Service {
    '/services': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    services: Array<{
                        id: number;
                        location_id: number;
                        status: string;
                        websocket_token: string;
                        user_id: number;
                        comment: string;
                        auto_extension: boolean;
                        auto_extension_duration: unknown;
                        auto_extension_external: boolean;
                        type: string;
                        type_human: string;
                        managedroot_id: unknown;
                        details: {
                            address: string;
                            name: string;
                            game: string;
                            portlist_short: string;
                            folder_short: string;
                            slots: number;
                        };
                        start_date: string;
                        suspend_date: string;
                        delete_date: string;
                        username: string;
                        roles: Array<string>;
                    }>;
                };
            };
        }>;
    }>;
    '/services/{id}': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    service: {
                        id: number;
                        location_id: number;
                        status: string;
                        websocket_token: string;
                        user_id: number;
                        username: string;
                        auto_extension: boolean;
                        auto_extension_duration: unknown;
                        auto_extension_external: boolean;
                        type: string;
                        type_human: string;
                        details: {
                            address: string;
                            name: string;
                            game: string;
                            portlist_short: string;
                            folder_short: string;
                            slots: number;
                        };
                        start_date: number;
                        suspend_date: number;
                        delete_date: number;
                        arguments: {
                            startgame: string;
                            startport: string;
                        };
                        roles: Array<string>;
                    };
                };
            };
        }>;
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The server will be deleted in the next minutes.';
            };
        }>;
    }>;
    '/services/{id}/cancel': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    status: 'success';
                    message: 'The server will be canceled now.';
                };
            };
        }, {
            delete_instantly?: boolean;
        }>;
    }>;
    '/services/{id}/auto_extend': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    auto_extend: Array<{
                        id: number;
                        name: string;
                        active: boolean;
                        description: string;
                        available: boolean;
                        payment_method: string;
                        rental_times: Record<string, number>;
                    }>;
                };
            };
        }>;
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }, {
            auto_extend_id: number;
            rental_time: number;
        }>;
    }>;
    '/services/{id}/subdomain': URL<{
        put: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Changed subdomain.';
            };
        }, {
            domain_id: number;
            subdomain: string;
        }>;
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Deleted subdomain.';
            };
        }>;
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: {
                    subdomain: string;
                    domain: string;
                    fqdn: string;
                    domain_id: number;
                };
            };
        }>;
    }>;
    '/services/{id}/knowledge_base': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                articles: Array<{
                    title: string;
                    url: string;
                    game: string;
                    characteristic: string;
                }>;
            };
        }, {
            characteristic?: string;
        }>;
    }>;
    '/services/{id}/subdomain/domains': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    domains: Array<{
                        name: string;
                        id: number;
                    }>;
                };
            };
        }>;
    }>;
    '/services/{id}/sale_price': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    sale_price: {
                        price: number;
                        currency: string;
                        remaining_duration: number;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/logs': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    current_page: number;
                    logs_per_page: number;
                    page_count: number;
                    log_count: number;
                    logs: Array<{
                        user: string;
                        category: string;
                        severity: string;
                        message: string;
                        created_at: string;
                        admin: boolean;
                    }>;
                };
            };
        }, {
            page?: number;
        }>;
    }>;
    '/services/bulk_notifications': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    notifications: Record<string, Array<{
                        id: number;
                        service_id: number;
                        type: string;
                        level: string;
                        error_id: number;
                        dismissed: boolean;
                        message: string;
                        message_bbcode: string;
                        message_long: string;
                        message_long_bbcode: string;
                        actions: Array<unknown>;
                        data: Record<string, string>;
                        created_at: string;
                        created_at_timestamp: number;
                        lifetime: boolean;
                    }>>;
                };
            };
        }, {
            service_ids: string;
        }>;
    }>;
    '/services/{id}/notifications': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    notifications: Array<{
                        id: number;
                        service_id: number;
                        type: string;
                        level: string;
                        error_id: boolean;
                        dismissed: boolean;
                        message: string;
                        data: Record<string, string>;
                        created_at: string;
                        created_at_timestamp: number;
                        lifetime: boolean;
                    }>;
                };
            };
        }, {
            include_dismissed?: boolean;
        }>;
    }>;
}

interface User {
    '/user': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: string;
                    ttl: number;
                };
            };
        }, {
            token: string;
            password?: string;
            timezone?: string;
            donations?: string;
            profile?: {
                name?: string;
                street?: string;
                postcode?: string;
                city?: string;
                country?: string;
                state?: string;
                newsletter?: boolean;
            };
        }>;
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    user: {
                        user_id: number;
                        username: string;
                        activated: boolean;
                        timezone: string;
                        email: string;
                        credit: number;
                        currency: string;
                        registered: string;
                        language: string;
                        avatar: string;
                        donations: string;
                        phone: {
                            number: string;
                            country_code: string;
                            verified: boolean;
                        };
                        two_factor: Array<string>;
                        profile: {
                            name: string;
                            street: string;
                            postcode: string;
                            city: string;
                            country: string;
                            state: string;
                            country_and_state_verified: boolean;
                            newsletter: boolean;
                        };
                        permissions: Array<string>;
                        employee: boolean;
                        partner_id: number;
                    };
                };
            };
        }>;
    }>;
    '/countries/states': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    states: Record<string, string>;
                };
            };
        }>;
    }>;
    '/countries': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    countries: Record<string, string>;
                };
            };
        }>;
    }>;
    '/user/account_overview': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    account_overview: {
                        from: string;
                        end: string;
                        payments: Array<{
                            id: number;
                            invoice_id: unknown;
                            service_id: number;
                            switched_service_id: unknown;
                            donation: unknown;
                            date: string;
                            method: string;
                            duration: number;
                            type: string;
                            amount: number;
                            currency: string;
                            ip: string;
                            refundable: boolean;
                            provider_fee: unknown;
                            last_status: unknown;
                        }>;
                    };
                };
            };
        }>;
    }>;
    '/user/token': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: string;
                    ttl: number;
                };
            };
        }, {
            password: string;
        }>;
    }>;
    '/user/language': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    language: string;
                };
            };
        }, {
            language: string;
        }>;
    }>;
    '/user/verify_country_and_state': URL<{
        get: RequestResponse<{
            status: '200';
            body: unknown;
        }, {
            country?: string;
            state?: string;
        }>;
    }>;
    '/voucher/redeem': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The voucher has been redeemed successful.';
            };
        }, {
            code: string;
        }>;
    }>;
}

interface Registration {
    '/registration': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    registration: {
                        google_recaptcha: {
                            enabled: boolean;
                            key: string;
                        };
                    };
                };
            };
        }>;
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    registration: {
                        user: {
                            id: number;
                        };
                        oauth: {
                            access_token: string;
                            refresh_token: string;
                            expires_in: number;
                            scope: string;
                        };
                    };
                };
            };
        }, {
            client_id: string;
            client_secret: string;
            recaptcha?: string;
            username: string;
            email: string;
            password: string;
            currency?: string;
            language?: string;
            timezone?: string;
        }>;
    }>;
    '/registration/activate': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The user has been activated successfully.';
            };
        }, {
            code: string;
            email: string;
        }>;
    }>;
}

interface OAuth2 {
    '/token/sub': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        access_token: string;
                        token_type: string;
                        expires_in: number;
                        scope: string;
                    };
                };
            };
        }, {
            scope?: string;
            expires_in?: number;
            service_id?: number;
            user_id?: number;
        }>;
    }>;
    '/token/long_life_token': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        access_token: string;
                        refresh_token: string;
                        token_type: string;
                        expires_in: number;
                        scope: string;
                    };
                };
            };
        }, {
            token: string;
            client_id: string;
            client_secret: string;
            description: string;
            scope?: string;
            service_id?: number;
        }>;
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    tokens: Array<string>;
                };
            };
        }>;
    }>;
    '/token/long_life_token/{id}': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The access token has been deleted.';
            };
        }>;
    }>;
    '/token': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        id: number;
                        user: {
                            id: number;
                            username: string;
                        };
                        expires_at: string;
                        valid_until: string;
                        scopes: Array<string>;
                        two_factor_method: string;
                        employee: boolean;
                    };
                };
            };
        }>;
    }>;
}

interface Global {
    '/ping': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
    '/maintenance': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    maintenance: {
                        cloud_backend: boolean;
                        domain_backend: boolean;
                        dns_backend: boolean;
                        pmacct_backend: boolean;
                    };
                };
            };
        }>;
    }>;
    '/version': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}

interface Bouncer {
    '/services/{id}/bouncers': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    bouncer: {
                        max_bouncer: number;
                        type: string;
                        bouncers: Array<{
                            ident: string;
                            password: string;
                            server: {
                                name: string;
                                port: number;
                            };
                            running_tasks: number;
                        }>;
                    };
                };
            };
        }>;
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Ident created.';
            };
        }, {
            ident: string;
            password: string;
        }>;
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Ident deleted.';
            };
        }, {
            ident: string;
        }>;
        put: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Password changed.';
            };
        }, {
            ident: string;
            password: string;
        }>;
    }>;
}

interface Company {
    '/company/stats': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    employee_count: number;
                    game_count: number;
                    location_count: number;
                    services: {
                        active: number;
                        total: number;
                    };
                    hardware: {
                        cpu_cores: number;
                        memory_gb: number;
                        storage_tb: number;
                    };
                };
            };
        }>;
    }>;
}

interface Game_Lastoasis {
    '/ping': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}

declare type URLs = Global & OAuth2 & Registration & User & Service & Bouncer & Cloud_Server & Cloud_Server_Apps & Company & Domain & Game_Lastoasis & Game_Server;

declare type ParamsRecord<URLString extends string, Params = Record<string, string>> = URLString extends `${infer Head}{${infer Parameter}}${infer Tail}` ? ParamsRecord<Tail, Params & {
    [P in Parameter]: string;
}> : Params;

/**
 * NitrApi request manager
 * @param token The token to use for bearer auth requests
 * @returns The NitrApi instance
 *
 * @github https://github.com/cainthebest/nitrado.js
 * @bugs https://github.com/cainthebest/nitrado.js/issues
 * @official_nitrado_docs https://doc.nitrado.net/
 * @author Copyright (C) 2022 cainthebest & Contributors
 * @license GNU General Public License v3.0
 */
declare const NitrApi: (token?: string | undefined) => {
    path: <URLString extends keyof Global | keyof OAuth2 | keyof Registration | keyof User | keyof Service | "/services/{id}/bouncers" | keyof Cloud_Server | keyof Cloud_Server_Apps | "/company/stats" | keyof Domain | keyof Game_Server, Params extends ParamsRecord<URLString, Record<string, string>>>(url: URLString, params: Params) => URLs[URLString];
};

export { NitrApi };
