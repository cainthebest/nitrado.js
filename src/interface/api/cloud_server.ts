import { URL, RequestResponse } from '../../types/url';

export interface Cloud_Server {
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
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'A new firewall rule has been added.';
                };
            },
            {
                source_ip: string;
                target_ip: string;
                target_port: number;
                protocol: string;
                comment: string;
            }
        >;
    }>;
    '/services/{id}/cloud_servers/system/units/changefeed': URL<{
        post: RequestResponse<
            {
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
            },
            {
                unit?: string;
                initial_state?: string;
            }
        >;
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
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Signal has been successfully sent';
                };
            },
            { who?: string; signal?: number }
        >;
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
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        job: number;
                    };
                };
            },
            { replace?: boolean }
        >;
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
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        job: number;
                    };
                };
            },
            { replace?: boolean }
        >;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/start': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        job: number;
                    };
                };
            },
            { replace?: boolean }
        >;
    }>;
    '/services/{id}/cloud_servers/system/units/{unit}/stop': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        job: number;
                    };
                };
            },
            { replace?: boolean }
        >;
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
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: string;
                };
            },
            { hostname?: string }
        >;
    }>;
    '/services/{id}/cloud_servers/ptr/{ip_address}': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: string;
                };
            },
            { hostname: string }
        >;
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
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'File or directory has been chmoded.';
                };
            },
            {
                recursive: boolean;
                path: string;
                username?: string;
                group?: string;
            }
        >;
    }>;
    '/services/{id}/cloud_servers/file_server/copy': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'File or directory has been copied';
                };
            },
            {
                source_path: string;
                target_path: string;
                target_name: string;
            }
        >;
    }>;
    '/services/{id}/cloud_servers/file_server/mkdir': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'The directory has created';
                };
            },
            {
                path: string;
                name: string;
                username: string;
            }
        >;
    }>;
    '/services/{id}/cloud_servers/file_server/delete': URL<{
        delete: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'File or directory has been deleted';
                };
            },
            {
                path: string;
            }
        >;
    }>;
    '/services/{id}/cloud_servers/file_server/download': URL<{
        get: RequestResponse<
            {
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
            },
            {
                file: string;
            }
        >;
    }>;
    '/services/{id}/cloud_servers/file_server/list': URL<{
        get: RequestResponse<
            {
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
            },
            {
                dir?: string;
                search?: string;
            }
        >;
    }>;
    '/services/{id}/cloud_servers/file_server/move': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'The directory has been moved';
                };
            },
            {
                source_path: string;
                target_path: string;
                target_filename?: string;
            }
        >;
    }>;
    '/services/{id}/cloud_servers/file_server/size': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        size: number;
                    };
                };
            },
            {
                path: string;
            }
        >;
    }>;
    '/services/{id}/cloud_servers/file_server/stat': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        entries: Record<
                            string,
                            {
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
                            }
                        >;
                    };
                };
            },
            {
                files: Array<string>;
            }
        >;
    }>;
    '/services/{id}/cloud_servers/file_server/upload': URL<{
        post: RequestResponse<
            {
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
            },
            {
                path: string;
                file: string;
            }
        >;
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
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Re-installation has been started.';
                };
            },
            { image_id?: number }
        >;
    }>;
    '/services/{id}/cloud_servers/system/journal': URL<{
        get: RequestResponse<
            {
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
            },
            { unit?: string; cursor?: string; backlog?: number; count?: number }
        >;
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
        get: RequestResponse<
            {
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
            },
            { time?: number }
        >;
    }>;
    '/services/{id}/cloud_servers/console_logs': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        console_logs: string;
                    };
                };
            },
            { lines?: number }
        >;
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
                        last_30_days: Record<
                            string,
                            {
                                incoming: number;
                                outgoing: number;
                            }
                        >;
                    };
                };
            };
        }>;
    }>;
}
